import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = task.trim()
    if (!trimmed) return

    setTodos((current) => [
      ...current,
      { id: Date.now(), text: trimmed, completed: false },
    ])
    setTask('')
  }

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((current) => current.filter((todo) => !todo.completed))
  }

  const remainingCount = todos.filter((todo) => !todo.completed).length

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h1 className="todo-heading">Todo App</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Enter a new task"
          />
          <button className="todo-add-button" type="submit">
           <b> Add </b>
          </button>
        </form>

        <div className="todo-toolbar">
          <span>{remainingCount} task{remainingCount === 1 ? '' : 's'} left</span>
          {todos.some((todo) => todo.completed) && (
            <button className="todo-clear-button" type="button" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="todo-empty">No todos yet. Add one to get started.</li>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'todo-item-completed' : ''}`}
              >
                <button className="todo-check-button" onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? '✔' : ''}
                </button>
                <span className="todo-text">{todo.text}</span>
                <button className="todo-delete-button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default App














