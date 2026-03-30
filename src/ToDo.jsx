import { useState } from "react"


function ToDo() {
  const [newTodo,setNewTodo] = useState("");
  const [todos,setTodos] = useState([]);

  const handleSubmit = (e) => {

  }

   const handleDelete = (index) => {
    
  }

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Add new Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo,index) => (
          <li key={index}>
            <span></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo