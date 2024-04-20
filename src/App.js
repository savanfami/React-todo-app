import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the todo item being edited
  const [editText, setEditText] = useState(''); // Track the text of the todo item being edited

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this todo?');
    if (isConfirmed) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index); // Set the index of the todo item being edited
    setEditText(todos[index]); // Set the text of the todo item being edited
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editText;
    setTodos(updatedTodos);
    setEditIndex(-1); // Reset the edit index after saving
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODO LIST</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                <div className="left">
                  <p>{todo}</p>
                </div>
                <div className="right">
                  <i onClick={() => handleEditTodo(index)} className="fas fa-edit"></i>
                  <i onClick={() => handleRemoveTodo(index)} className="fas fa-times"></i>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
