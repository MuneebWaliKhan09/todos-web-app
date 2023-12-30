import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../store/features/todos";
import { useNavigate } from "react-router-dom";

const TodosCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("No");
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [Terror, setTError] = useState("");
  const [Cerror, setCError] = useState("");

  const handleDesc = () => {
    if (desc.length > 55) {
      setError("Description should be equal to ( 55 ) characters");
    } else {
      setError("");
    }
    if (title.length > 25) {
      setTError("Title should be equal to ( 25 ) characters");
    } else {
      setTError("");
    }
    if (category.length > 10) {
      setCError("Category should be equal to ( 10 ) characters")
    } else {
      setCError("");
    }
  };
  const submitTodo = (e) => {
    e.preventDefault();
    if (error.length > 0) {
      return alert("Please correct the description to create todo");
    }
  
    if (title.length === 0) {
      return setTError("Please fill out the title");
    }
    if (category.length === 0) {
      return setCError("Please fill out the category");
    }
  
    if (Terror.length > 0) {
      return alert("Please correct the title to create todo");
    }

    if (desc.length === 0) {
      return setError("Please fill out the description");
    }

    dispatch(
      createTodo({
        title: title,
        completed: completed == "on" ? "Yes": "No",
        category: category,
        desc: desc,
        date: Date.now(),
      })
    );
    if (todos.length === todos.length) {
      alert("todo created successfully 😍");
      navigate("/All-Todos");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4  mt-6 rounded-md h-[100vh]">
      <form
        onSubmit={submitTodo}
        action=""
        className="flex flex-col items-start shadow-xl rounded-xl border-2 border-gray-200 gap-9 p-8 w-[80%] md:w-[40%]"
      >
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            onKeyUp={handleDesc}
            className="py-2 px-3 border-1 bg-gray-100 outline outline-1 rounded-lg w-[100%]"
          />
          <span className="text-red-500 text-[11px] text-wrap">{Terror}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">
            Completed
          </label>
          <input
            type="checkbox"
            placeholder="completed"
            onChange={(e) => setCompleted(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">
            Category
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            onKeyUp={handleDesc}
            type="text"
            placeholder="Category"
            className="py-2 px-3 border-1 bg-gray-100 outline outline-1 rounded-lg w-[100%]"
          />
          <span className="text-red-500 text-[11px] text-wrap">{Cerror}</span>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">
            Description
          </label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            onKeyUp={handleDesc}
            type="text"
            placeholder="description"
            className="py-2 px-3 border-1 bg-gray-100 outline outline-1 rounded-lg w-[100%]"
          />
          <span className="text-red-500 text-[11px] text-wrap">{error}</span>
        </div>
        <button
          type="submit"
          className="text-white border-2 transition-all font-bold text-xl py-2 px-7 bg-gray-600 rounded-xl"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodosCreate;
