import React, { useEffect, useState } from "react";
import "./switcher.css"
const Switcher = ({setTheme, theme}) => {
  console.log(theme);
  const [checked, setChecked] = useState(false)

  const handleSwitch = (e)=>{
    if(e.target.checked){
      setTheme(["bg-gray-800" ,"text-white"])
      localStorage.setItem("theme", JSON.stringify(["bg-gray-800" ,"text-white"]))
    }
    else{
      setTheme(["", ""])
      localStorage.removeItem("theme", JSON.stringify(["" ,""]))
    }
  }
  
  useEffect(()=>{
    const savedtheme = JSON.parse(localStorage.getItem("theme"))
      if(savedtheme && savedtheme){
        setChecked(true)
      }
      else{
        setChecked(false)
      }
    
  }, [theme])


  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} checked={checked}/>
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switcher;
