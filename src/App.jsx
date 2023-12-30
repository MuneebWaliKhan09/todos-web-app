import Nav from "./components/Nav.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosCenter from "./components/TodosCenter.jsx";
import TodosCreate from "./components/TodosCreate.jsx";
import UpdateTodo from "./components/UpdateTodo.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./index.css"

function App() {
  const [filterTodo, setfilterTodo] = useState([]);
  const todos = useSelector((state) => state.todos);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || ["", ""]);

  const filterTodos = (search) => {
    const filtered = todos?.filter(
      (todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase()) ||
        todo.category.toLowerCase().includes(search.toLowerCase()) ||
        todo.completed.toLowerCase().includes(search.toLowerCase())
    );
      setTimeout(() => {
        setfilterTodo(filtered);
      }, 1000);
  };
console.log(filterTodo);
  return (
    <div className={`${theme[0]} ${theme[1]}`}>
      <BrowserRouter>
        <Nav filterTodos={filterTodos} setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<TodosCreate />} />
          <Route
            path="/All-Todos"
            element={<TodosCenter filterTodo={filterTodo} />}
          />
          <Route path="/update-Todo/:id" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
