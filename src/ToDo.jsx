// import { useState } from "react"


// function ToDo() {
//   const [newTodo,setNewTodo] = useState("");
//   const [todos,setTodos] = useState([]);

//   const handleSubmit = (e) => {
// e.preventDefault();
// if(newTodo)
// {
//   setTodos([...todos,{text:newTodo, completed:false}])
//   setNewTodo("");
// }
//   }

//    const handleDelete = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos)
//   }

//   return (
//     <div>
//       <h2>Todo App</h2>
//       <form onSubmit={handleSubmit}>

//         <input type="text" placeholder="Add new Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo,index) => (
//           <li key={index}>
//             <span style={{ textDecoration : todo.completed ? 'line-through' : "none"  }}>{todo.text}</span>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ToDo
import { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2 className="todo-title">📝 My Todo App</h2>

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="add-btn">Add</button>
        </form>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-text">No tasks yet. Add one 🚀</p>
          ) : (
            todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                  onClick={() => toggleComplete(index)}
                >
                  {todo.text}
                </span>

                <div className="todo-actions">
                  <button
                    className="complete-btn"
                    onClick={() => toggleComplete(index)}
                  >
                    {todo.completed ? "Undo" : "Done"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;