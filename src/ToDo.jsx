import { useState } from "react"


function ToDo() {
  const [newTodo,setNewTodo] = useState("");
  const [todos,setTodos] = useState([]);

  const handleSubmit = (e) => {
e.preventDefault();
if(newTodo)
{
  setTodos([...todos,{text:newTodo, completed:false}])
  setNewTodo("");
}
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
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo