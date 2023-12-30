import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Switcher from "./Switcher";

const Nav = ({filterTodos, setTheme, theme}) => {
    const  todos = useSelector((state)=> state.todos)
    const savedtheme = JSON.parse(localStorage.getItem("theme"))
    const location = useLocation();
    
  return (
    <>
      <header className={`${savedtheme && savedtheme ? 'bg-[#1F2937] text-white border-[1px] border-gray-600' : 'bg-blue-500 text-white'}`}>
        <div className="container mx-auto py-4">
          <nav className="flex items-center justify-between flex-col gap-6">
            <Link to="/" className="text-3xl font-semibold">
              Todos App
            </Link>

            <div className="flex items-center space-x-12">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/All-Todos" className="hover:underline">
                Tasks
              </Link>
              <div className="relative">
                <i className="fas fa-bell text-[27px]"></i>
                <div className="absolute top-[-7px] right-[-5px] h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                {todos && todos.length > 0 ? todos.length : 0}
                </div>
              </div>

             {location.pathname === "/" && <Switcher setTheme={setTheme} theme={theme} />}
            </div>
            {location.pathname === "/All-Todos" && <SearchBar filterTodos={filterTodos} />}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
