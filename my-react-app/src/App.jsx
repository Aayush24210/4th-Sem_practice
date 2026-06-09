import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [savedText, setSavedText] = useState('Your saved text will appear here')
  const [pageColor, setPageColor] = useState('#f2f7ff')
  const inputRef = useRef(null)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleUpdate = () => {
    setSavedText(inputValue || 'Your saved text will appear here')
  }

  const handleEdit = () => {
    setInputValue(savedText === 'Your saved text will appear here' ? '' : savedText)
    inputRef.current?.focus()
  }

  const handleColorChange = (color) => {
    setPageColor(color)
  }

  return (
    <div className="todo-page" style={{ background: pageColor }}>
      <div className="todo-card">
        <h1 className="todo-heading">Live Text Preview</h1>

        <div className="todo-form">
          <input
            ref={inputRef}
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type text here..."
          />
          <button className="todo-add-button" onClick={handleUpdate}>
            Update
          </button>
        </div>

        <div className="todo-toolbar">
          <span>Live preview:</span>
          <button className="todo-clear-button" onClick={handleEdit}>
            Edit
          </button>
        </div>

        <h3 className="preview-heading">{inputValue || 'Nothing typed yet'}</h3>
        <p className="saved-text">Saved text: {savedText}</p>

        <div className="color-button-row">
          {['red', 'blue', 'yellow', 'green', 'purple'].map((color) => (
            <button
              key={color}
              className={`color-button ${color}`}
              onClick={() => handleColorChange(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
