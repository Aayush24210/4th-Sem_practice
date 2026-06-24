// // // import { useState, useRef } from 'react'
// // // import './App.css'

// // // function App() {
// // //   const [inputValue, setInputValue] = useState('')
// // //   const [savedText, setSavedText] = useState('Your saved text will appear here')
// // //   const [pageColor, setPageColor] = useState('#f2f7ff')
// // //   const inputRef = useRef(null)

// // //   const handleChange = (event) => {
// // //     setInputValue(event.target.value)
// // //   }

// // //   const handleUpdate = () => {
// // //     setSavedText(inputValue || 'Your saved text will appear here')
// // //   }

// // //   const handleEdit = () => {
// // //     setInputValue(savedText === 'Your saved text will appear here' ? '' : savedText)
// // //     inputRef.current?.focus()
// // //   }

// // //   const handleColorChange = (color) => {
// // //     setPageColor(color)
// // //   }

// // //   return (
// // //     <div className="todo-page" style={{ background: pageColor }}>
// // //       <div className="todo-card">
// // //         <h1 className="todo-heading">Live Text Preview</h1>

// // //         <div className="todo-form">
// // //           <input
// // //             ref={inputRef}
// // //             className="todo-input"
// // //             type="text"
// // //             value={inputValue}
// // //             onChange={handleChange}
// // //             placeholder="Type text here..."
// // //           />
// // //           <button className="todo-add-button" onClick={handleUpdate}>
// // //             Update
// // //           </button>
// // //         </div>

// // //         <div className="todo-toolbar">
// // //           <span>Live preview:</span>
// // //           <button className="todo-clear-button" onClick={handleEdit}>
// // //             Edit
// // //           </button>
// // //         </div>

// // //         <h3 className="preview-heading">{inputValue || 'Nothing typed yet'}</h3>
// // //         <p className="saved-text">Saved text: {savedText}</p>

// // //         <div className="color-button-row">
// // //           {['red', 'blue', 'yellow', 'green', 'purple'].map((color) => (
// // //             <button
// // //               key={color}
// // //               className={`color-button ${color}`}
// // //               onClick={() => handleColorChange(color)}
// // //             >
// // //               {color}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default App







// // import React from 'react'
// // import React, { useReducer } from 'react'
// // const App = () => {
// //   let data = {
// //     input: "",
// //     todos: {}
// //   }
// //   function reducer(state, action) {
// //   if (action.type === "SET_TODO") {
// //     return (
// //       ...state,
// //       input:action.payload,

// //     )

// //     else if (action.type == "ADD_TODO") {
// //     return {
// //       todos: [...state.todos, state.input]
// //     }
// //   } else if (action.type == "DELET_TODO") {
// //     return {
// //       ...state,
// //       todos: state.todos.filter((_, id) => {
// //         return id !== action.payload
// //       })
// //     }
// //   } else if (action.type == "UPDATE_TODO") {
// //     let updateTodos = [...state.todos]
// //     updateTodos[state.index] = state.input
// //     return {
// //       ...state,
// //       todos: updateTodos,
// //       input: "",
// //       index: null
// //     }
// //   } else if (action.type == "EDIT_TODO") {
// //     return {
// //       ...state,
// //       task: state.todos[action.payload],
// //       index: action.payload
// //     }
// //   }

// // }
// // let [state, disptach] = useReducer(reduser, intialData)
// // function handleSubmit() {
// //   if (state.index !== null) {
// //     disptach({ type: "UPDATE_TODO" })
// //   } else {
// //     disptach({ type: "ADD_TODO" })
// //   }
// // }
// // return (
// //   <div>
// //     <input name='input' value={state.input} onChange={(e) => disptach({ type: "SET_INP", payload: e.target.value })} />
// //     <button onClick={handleSubmit}>{state.index !== null ? "update" : "add"}</button>
// //     {
// //       state.todos.map((a, b) => {
// //         return (<>
// //           <h4>{a}</h4>
// //           <button onClick={() => disptach({ type: "DELET_TODO", payload: b })}>delet</button>
// //           <button onClick={() => disptach({ type: "EDIT_TODO", payload: b })}>edit</button>
// //         </>)
// //       })
// //     }
// //   </div>
// // )
    
// // }
// // }

// // export default Todo
    

// import { useState } from "react";
// import "./App.css";
// import {GogleGenerativeAI} from 'google/generative-ai'


// const App= ()=> {
//   let [searchData,SearchData]= useState('')

// }


// const [messages, setMessages] = useState([
//   {
//     text: "Hello! How can I help you?",
//     sender: "bot",
//   },
// ]);


// async function search(){
//   try{
//     GenAI =  getgenerativeModelgenai>
//     model.generatecontent

//   }

//   catch (error) {
//     console.log(er)
//   }}

// const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       text: input,
//       sender: "user",
//     };

//     const botMessage = {
//       text: `You said: ${input}`,
//       sender: "bot",
//     };

//     setMessages([...messages, userMessage, botMessage]);
//     setInput("");
//   };

//   return (
//     <div className="chat-container">
//       <h2>ChatBot</h2>
    
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`message ${msg.sender}`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="input-area">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               sendMessage();
//             }
//           }}
//         />

//         <button onClick={sendMessage}>
//           Send
//         </button>

//       </div>
//     </div>
//   );

// export default App;





import React, { useState } from 'react';

const ShopCartUI = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Headphones',
    'Accessories',
    'Footwear',
    'Men',
    'Women',
    'Kids',
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '₹1,499',
      icon: '🎧', 
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: '₹2,599',
      icon: '⌚', 
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header / Navbar */}
      <header className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="font-bold text-lg tracking-tight">Shop Cart</span>
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          <button className="hover:text-gray-800">Search</button>
          <button className="hover:text-gray-800">Cart (0)</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        
        {/* Hero Banner */}
        <div className="bg-[#10b981] text-white rounded-2xl px-8 py-12 md:py-16 text-center md:text-left flex flex-col justify-center relative overflow-hidden shadow-sm">
          <p className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-2">
            Fresh Drops • Free Shipping
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Everything you need, all in one place 🎒
          </h1>
          <p className="text-emerald-50 text-base md:text-lg max-w-2xl">
            Discover top brands, exclusive accessories, and tech gear at the best prices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="hidden md:block text-sm text-emerald-600 font-medium whitespace-nowrap ml-4">
            See All Explore →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl p-5 flex flex-col transition-shadow hover:shadow-md border border-gray-100/50 ring-1 ring-gray-100"
            >
              {/* Product Image Area */}
              <div className="h-56 bg-teal-50/50 rounded-xl mb-5 flex items-center justify-center text-7xl relative group">
                {/* Simulated faint background rings like the image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <div className="w-32 h-32 rounded-full border-4 border-emerald-500"></div>
                </div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </span>
              </div>
              
              {/* Product Details */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                <p className="text-gray-900 font-bold mt-1 text-xl">{product.price}</p>
              </div>
              
              {/* Action Button */}
              <button className="mt-auto w-full bg-[#10b981] hover:bg-emerald-600 text-white font-medium py-3 rounded-xl transition-colors shadow-sm">
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopCartUI;