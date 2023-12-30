import React from "react";

const SearchBar = ({filterTodos}) => {
    
  const handleSearch = (e)=>{
      filterTodos(e.target.value);
  }


  return (
    <form action="" className=" w-[100%]">

    <div className="relative mx-auto max-w-md">
      <input
        type="text"
        className="w-full text-gray-600 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        placeholder="Search by category, completed , title..."
        onChange={handleSearch}
      />
      <button type="submit" className="absolute bg-white right-0 top-0 mt-2 mr-4">
        <i className="fas fa-search text-gray-500"></i>
      </button>
    </div>
    </form>

  );
};

export default SearchBar;
