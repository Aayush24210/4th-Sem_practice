document.getElementById("getLocationBtn").addEventListener("click", function () {
  const btn = document.getElementById("getLocationBtn");

  // Reset fields
  ["city", "area", "state", "country", "pincode"].forEach(id => {
    document.getElementById(id).textContent = "Fetching...";
  });

  btn.textContent = "Locating...";
  btn.disabled = true;

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    btn.textContent = "Get My Location";
    btn.disabled = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
          {
            headers: {
              // Required by Nominatim usage policy
              "Accept-Language": "en",
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch location data.");

        const data = await response.json();
        const addr = data.address;

        // Populate fields with fallbacks for different region formats
        document.getElementById("city").textContent =
          addr.city || addr.town || addr.village || addr.county || "N/A";

        document.getElementById("area").textContent =
          addr.suburb || addr.neighbourhood || addr.quarter || addr.district || "N/A";

        document.getElementById("state").textContent =
          addr.state || "N/A";

        document.getElementById("country").textContent =
          addr.country || "N/A";

        document.getElementById("pincode").textContent =
          addr.postcode || "N/A";

      } catch (error) {
        console.error("Geocoding error:", error);
        ["city", "area", "state", "country", "pincode"].forEach(id => {
          document.getElementById(id).textContent = "Error fetching data";
        });
      }

      btn.textContent = "Refresh Location";
      btn.disabled = false;
    },
    function (error) {
      let message = "Unable to retrieve location.";
      if (error.code === error.PERMISSION_DENIED) {
        message = "Location permission denied.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "Position unavailable.";
      } else if (error.code === error.TIMEOUT) {
        message = "Location request timed out.";
      }

      alert(message);
      ["city", "area", "state", "country", "pincode"].forEach(id => {
        document.getElementById(id).textContent = "N/A";
      });

      btn.textContent = "Get My Location";
      btn.disabled = false;
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
});