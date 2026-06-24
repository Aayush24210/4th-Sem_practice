// // // Without using  useState build todo app 

// // import React, { useReducer } from 'react'

// // const Todo = () => {
// //     let intialData={
// //         input:"",
// //         todos:[]
// //     }
// //     function reducer(state,action){
// //         if(action.type=="set_input"){
// //             return{
// //                 ...state,input:action.payload
// //             }
// //         }else if(action.type=="add_TODO"){
// //             return{
// //                 input:"",
// //                 todos:[...state.todos,state.input]
// //             }
// //         }
// //         else if(action.type=="DELET_TODO"){
// //             return {
// //                 ...state,
// //                 todos:state.todos.filter((_,index)=>{
// //                     index!==action.payload

// //                 })
// //             }
// //         }

// //     }
// //   let [state,disptach]= useReducer(reducer,intialData)

// //   return (
// //     <div>
// //         <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
// //         <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
// //         {
// //             state.todos.map((a,index)=>{
// //                 return(<>
// //                 <h2>{a}</h2>
// //                 <button onClick={()=>disptach({type:"DELET_TODO",payload:index})}>delet</button>
// //                 </>)
// //             })
// //         }
// //     </div>
// //   )
// // }

// // export default Todo


// import React, { useReducer } from 'react'
// const Todo = () => { 
//     let  intialData={
//         input:"",
//         todos:[],
//         index:null
//     }
//     function reduser(state,action){
//         if(action.type=="SET_INP"){
//             return{
//                 ...state,
//                 input:action.payload,
                
//             }
//         }
//         else if(action.type=="ADD_TODO"){
//             return{
//                 todos:[...state.todos,state.input]
//             }
//         }else if(action.type=="DELET_TODO"){
//             return{
//                 ...state,
//                 todos:state.todos.filter((_,id)=>{
//                     return id!==action.payload
//                 })
//             }
//         }else if(action.type=="UPDATE_TODO"){
//             let updateTodos=[...state.todos]
//             updateTodos[state.index]=state.input
//             return{
//                 ...state,
//                 todos:updateTodos,
//                 input:"",
//                 index:null
//             }
//         }else if(action.type=="EDIT_TODO"){
//             return{
//                 ...state,
//                 task:state.todos[action.payload],
//                 index:action.payload
//             }
//         }

//     }
//       let [state,disptach]=   useReducer(reduser,intialData)
//       function handleSubmit(){
//         if(state.index!==null){
//             disptach({type:"UPDATE_TODO"})
//         }else{
//             disptach({type:"ADD_TODO"})
//         }
//       }
//   return (
//     <div>        
//         <input  name='input'  value={state.input}  onChange={(e)=>disptach({type:"SET_INP",payload:e.target.value})}/>
//         <button onClick={handleSubmit}>{state.index!==null?"update":"add"}</button>
//         {  
//             state.todos.map((a,b)=>{
//                 return(<>
//                 <h4>{a}</h4>
//                 <button onClick={()=>disptach({type:"DELET_TODO",payload:b})}>delet</button>
//                 <button onClick={()=>disptach({type:"EDIT_TODO",payload:b})}>edit</button>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Todo

