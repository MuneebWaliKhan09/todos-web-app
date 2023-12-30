import { configureStore } from "@reduxjs/toolkit";
import todos from "./features/todos.js"

export const store = configureStore({
    reducer: todos.reducer
})



export default store