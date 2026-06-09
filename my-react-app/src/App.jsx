import React, { useEffect, useState } from "react";
import "./App.css";

const { useReducer } = require("react");

const Todo = () => {
  const [task, setTask] = useState("");
  let [index,SetIndex]=useState(null)
  const [todos, setTodos] = useState(()=>{
    let data=  localStorage.getItem("key")
    if(data){
        return JSON.parse(data)
    }
    return []
  });
  useEffect(()=>{
    localStorage.setItem("key",JSON.stringify(todos))

  },[todos])

  function edit(index){
    setTask(todos[index])
    SetIndex(index)

  }

  function handleAorUpdate(){
    if(task.trim()==""){
        return;
    }
    console.log("helloooooo");
    
    if(index!==null){
        let updateDATA=[...todos]
        updateDATA[index]=task
        setTodos(updateDATA)
    }else{
        setTodos([...todos,task])
        setTask("")
    }
  }
  function d(id){
   let d= todos.filter((a,b)=>{
        return id!=b

    })
    setTodos(d)

  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="input-box">
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Enter a task"
          onChange={(e)=>setTask(e.target.value)}
  
        />

<button onClick={handleAorUpdate}>
    {index!==null?"update":"Add"}
    </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>

            <div className="actions">
              <button onClick={()=>edit(index)}>
                Edit
              </button>

              <button  onClick={()=>d(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default Todo;



// function reducer(state,action){
//     ...state,
//     input:action.payload
// }
// }
// else if (action.type=="add"){
//     ...state,
//     todos:[...state.todos,action.payload]

// }
// useReducer[state, dispatchEvent] = useReducer(reducer, intialState)


// With the help of use reducer build a web color changing web where four buttons red green blue purple.and also add delete button who changes and deletes the colors of whole web
const TODO =() =>{
    function reducer(state,action){
        todos(...state.todos.state,state.input)
}
}
// }else if(action.type=="DELETE_TODO"){
//     return (
//         ...state,
//         todos:state.todos.filter((id)=>{
//             return id!=action.payload
//         })
//     )
// }

function App() {
  return (
    <div className="App">
      <h1>Color Changer</h1>
      <div className="button-container">
        <button style={{ backgroundColor: "red" }}>Red</button>
        <button style={{ backgroundColor: "green" }}>Green</button>
        <button style={{ backgroundColor: "blue" }}>Blue</button>
        <button style={{ backgroundColor: "purple" }}>Purple</button>
      </div>
      <button className="delete-button">Delete</button>
    </div>
  );
}

function reducer (state, action)
{
  switch(action.type)
  {
    case "changeColor":
      return {
        ...state,
        color: action.payload
      };
    case "deleteColor":
      return {
        ...state,
        color: ""
      };
    default:
      return state;
  } 
}




export default App;






















