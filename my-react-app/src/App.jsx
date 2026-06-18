// // import { useState, useRef } from 'react'
// // import './App.css'

// // function App() {
// //   const [inputValue, setInputValue] = useState('')
// //   const [savedText, setSavedText] = useState('Your saved text will appear here')
// //   const [pageColor, setPageColor] = useState('#f2f7ff')
// //   const inputRef = useRef(null)

// //   const handleChange = (event) => {
// //     setInputValue(event.target.value)
// //   }

// //   const handleUpdate = () => {
// //     setSavedText(inputValue || 'Your saved text will appear here')
// //   }

// //   const handleEdit = () => {
// //     setInputValue(savedText === 'Your saved text will appear here' ? '' : savedText)
// //     inputRef.current?.focus()
// //   }

// //   const handleColorChange = (color) => {
// //     setPageColor(color)
// //   }

// //   return (
// //     <div className="todo-page" style={{ background: pageColor }}>
// //       <div className="todo-card">
// //         <h1 className="todo-heading">Live Text Preview</h1>

// //         <div className="todo-form">
// //           <input
// //             ref={inputRef}
// //             className="todo-input"
// //             type="text"
// //             value={inputValue}
// //             onChange={handleChange}
// //             placeholder="Type text here..."
// //           />
// //           <button className="todo-add-button" onClick={handleUpdate}>
// //             Update
// //           </button>
// //         </div>

// //         <div className="todo-toolbar">
// //           <span>Live preview:</span>
// //           <button className="todo-clear-button" onClick={handleEdit}>
// //             Edit
// //           </button>
// //         </div>

// //         <h3 className="preview-heading">{inputValue || 'Nothing typed yet'}</h3>
// //         <p className="saved-text">Saved text: {savedText}</p>

// //         <div className="color-button-row">
// //           {['red', 'blue', 'yellow', 'green', 'purple'].map((color) => (
// //             <button
// //               key={color}
// //               className={`color-button ${color}`}
// //               onClick={() => handleColorChange(color)}
// //             >
// //               {color}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App







// import React from 'react'
// import React, { useReducer } from 'react'
// const App = () => {
//   let data = {
//     input: "",
//     todos: {}
//   }
//   function reducer(state, action) {
//   if (action.type === "SET_TODO") {
//     return (
//       ...state,
//       input:action.payload,

//     )

//     else if (action.type == "ADD_TODO") {
//     return {
//       todos: [...state.todos, state.input]
//     }
//   } else if (action.type == "DELET_TODO") {
//     return {
//       ...state,
//       todos: state.todos.filter((_, id) => {
//         return id !== action.payload
//       })
//     }
//   } else if (action.type == "UPDATE_TODO") {
//     let updateTodos = [...state.todos]
//     updateTodos[state.index] = state.input
//     return {
//       ...state,
//       todos: updateTodos,
//       input: "",
//       index: null
//     }
//   } else if (action.type == "EDIT_TODO") {
//     return {
//       ...state,
//       task: state.todos[action.payload],
//       index: action.payload
//     }
//   }

// }
// let [state, disptach] = useReducer(reduser, intialData)
// function handleSubmit() {
//   if (state.index !== null) {
//     disptach({ type: "UPDATE_TODO" })
//   } else {
//     disptach({ type: "ADD_TODO" })
//   }
// }
// return (
//   <div>
//     <input name='input' value={state.input} onChange={(e) => disptach({ type: "SET_INP", payload: e.target.value })} />
//     <button onClick={handleSubmit}>{state.index !== null ? "update" : "add"}</button>
//     {
//       state.todos.map((a, b) => {
//         return (<>
//           <h4>{a}</h4>
//           <button onClick={() => disptach({ type: "DELET_TODO", payload: b })}>delet</button>
//           <button onClick={() => disptach({ type: "EDIT_TODO", payload: b })}>edit</button>
//         </>)
//       })
//     }
//   </div>
// )
    
// }
// }

// export default Todo
    
    

import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you?",
      sender: "bot",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    const botMessage = {
      text: `You said: ${input}`,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>ChatBot</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;