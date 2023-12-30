import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },

  reducers: {
    createTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: action.payload.completed,
        category: action.payload.category,
        date: action.payload.date,
        desc: action.payload.desc,
      };

      state.todos.push(todo);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;

      const find = state.todos.find((todo) => todo.id === id);
      if (find) {
        find.title = action.payload.title;
        find.completed = action.payload.completed;
        find.category = action.payload.category;
        find.date = action.payload.date;
        find.desc = action.payload.desc;
        localStorage.setItem("todos", JSON.stringify(state.todos));
        alert("updated todo");
      }
    },

    deleteTodo: (state, action) => {
      const id = action.payload.id;

      const filter = state.todos.filter((td) => td.id !== id);
      const set = (state.todos = filter);
      localStorage.setItem("todos", JSON.stringify(state.todos));

      if (set) {
        alert("deleted todo");
      }
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice;
