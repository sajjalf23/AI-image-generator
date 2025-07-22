import "../Styles/header.css"
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import {useEffect} from "react"

function Header({darkMode,setDarkMode}) {
   useEffect(()=>{
     document.body.classList.toggle("dark-mode", darkMode);
   },[darkMode])

  return (
    <>
      <div className="card-header title-container">
        <h4>AI Image Generator</h4>
        <button type="button" className={`btn ${darkMode ? "btn-light" : "btn-secondary"}`} onClick={() => {
          return setDarkMode(!darkMode);
        }}> {darkMode ? <FaRegMoon /> : < IoMdSunny />} </button>
      </div>
    </>
  )
}
export default Header 