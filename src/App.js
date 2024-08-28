import React, { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);

  let pageSize = 10;
  let pagesNumber;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas);
      });
  }, []);

  const changePaginate = (newpage) => {
    setcurrentPage(newpage);
  };

  const pagesCount = Math.ceil(todos.length / pageSize);
  pagesNumber = Array.from(Array(pagesCount).keys());

  return (
    <div className="container shadow-sm p-3 mb-5 bg-white rounded">
      {!todos ? (
        "loading"
      ) : (
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
            {todos.map((todo) => (
              <tr key={todos.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>
                  <p
                    className={
                      todo.completed ? "btn btn-success" : "btn btn-warning"
                    }
                  >
                    {todo.completed ? "complested" : "pending"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center mt-2">
        <ul className="pagination">
          {pagesNumber.map((pageNumber) => (
            <li
              className={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <a className="page-link">{pageNumber + 1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
