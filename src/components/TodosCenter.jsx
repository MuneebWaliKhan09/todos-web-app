import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/features/todos";
import { useNavigate } from 'react-router-dom';


const TodosCenter = ({filterTodo}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const savedtheme = JSON.parse(localStorage.getItem("theme"))
    const delTodo = (id) => {
      dispatch(deleteTodo({id:id}))
    }
    const upTodo = (id) => {
      navigate(`/update-todo/${id}`)
    }

  return (
    <div className='flex justify-center gap-6 items-center mt-16  flex-wrap h-[100%] min-h-[70vh] '>
      {filterTodo && filterTodo.length > 0 ? (
        filterTodo.map((todo)=>(
          <div key={todo.id}>
            <ul className="border-2 w-[19rem] rounded-xl p-4 m-4 flex flex-col gap-4 shadow-2xl hover:shadow-md transition-all">
            <div className='flex justify-end gap-5'>
             <i onClick={()=> upTodo(todo.id)}  title='update' className="fa fa-pen-to-square cursor-pointer text-blue-500"></i>
              <i onClick={()=> delTodo(todo.id)} title='delete' className="fa fa-trash-can cursor-pointer text-red-500"></i>
            </div>
              <li><span className=" font-medium">Title:</span>  {todo.title}</li>
              <li><span className="font-medium">Completed:</span> <span className={`${todo.completed === "Yes" ? "text-green-500" : "text-red-500"}`}>{todo.completed}</span></li>
              <li><span className=" font-medium">Category:</span>  {todo.category}</li>
              <li><span className=" font-medium">Description:</span> {todo.desc}</li>
              <p className={`text-center py-3 m-0 rounded-lg ${savedtheme && savedtheme ? 'bg-gray-900 text-gray-200 border-2 border-gray-200': 'bg-gray-100'}`}><span className={`font-medium ${savedtheme && savedtheme ? 'text-white' : 'text-black'}`}>Date: </span>{new Date( todo.date).toDateString()}</p>
             
            </ul>
          </div>
        ))
      ):(
        todos && todos.map((todo) => (
          <div key={todo.id}>
            <ul className="border-2 w-[19rem] rounded-xl p-4 m-4 flex flex-col gap-4 shadow-2xl hover:shadow-md transition-all">
            <div className='flex justify-end gap-5'>
             <i onClick={()=> upTodo(todo.id)}  title='update' className="fa fa-pen-to-square cursor-pointer text-blue-500"></i>
              <i onClick={()=> delTodo(todo.id)} title='delete' className="fa fa-trash-can cursor-pointer text-red-500"></i>
            </div>
              <li><span className=" font-medium">Title:</span>  {todo.title}</li>
              <li><span className={`font-medium`}>Completed:</span> <span className={`${todo.completed === "Yes" ? "text-green-500" : "text-red-500"}`}>{todo.completed}</span></li>
              <li><span className=" font-medium">Category:</span>  {todo.category}</li>
              <li><span className=" font-medium">Description:</span> {todo.desc}</li>
              <p className={`text-center py-3 m-0 rounded-lg ${savedtheme && savedtheme ? 'bg-gray-900 text-gray-200 border-2 border-gray-200': 'bg-gray-100'}`}><span className={`font-medium ${savedtheme && savedtheme ? 'text-white' : 'text-black'}`}>Date: </span>{new Date( todo.date).toDateString()}</p>
            </ul>
          </div>
        ))
      )
    }
    </div>
  )
}

export default TodosCenter
