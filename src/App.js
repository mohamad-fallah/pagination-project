import React, {useState, useEffect} from "react";

export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(datas => {
        setTodos(datas)
        console.log(datas);        
      })
  }, [])



  return (
    <div>
      {
        !todos ? "loading" : (
          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>
                    <p
                      className={todo.completed ? "btn btn-success" : "btn btn-danger"}
                    >
                      {todo.completed ? "complested" : "pending"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
}
