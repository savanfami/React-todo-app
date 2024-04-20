import React,{useState} from 'react';


import './App.css';

function App() {

  const[todos,setTodos]=useState([])
  const [inputValue,setInputValue]=useState('')

  const handleAddTodo=()=>{
    if(inputValue.trim()!==''){
      setTodos([...todos,inputValue])
      setInputValue('')
    }
  }
  const handleRemoveTodo=(index)=>{
      const updatedTodos=todos.filter((todo,i)=>i!==index)
        setTodos(updatedTodos)

    }
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODO LIST</h1>
      </div>
      <div className="subHeading">
        <br />
        
      </div>
      <div className="input">
        <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="🖊️ Add item..." />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
  {todos.map((todo, index) => (
    <div className="todo" key={index}>
      <div className="left">
        <p>{todo}</p>
      </div>
      <div className="right">
        <i onClick={()=>handleRemoveTodo(index)} className="fas fa-times"></i>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;