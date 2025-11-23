
import { useState } from "react"
import "../component/Nav.css"
const Nav = () => {
  const[isOpen,setIsOpen]=useState(true)
  const closeMenu=()=>{
    setIsOpen(true)
  }
  const menuToggel=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="sticky-top"
      >
        <nav >
          <div className="text-white logo ms-lg-5">
           <h1 style={{fontFamily:"The Nautigal",fontSize:"40px",fontWeight:"bolder"}}> <a href="#Home" style={{color:"white",textDecoration:"none"}}>Kishore</a></h1>
          </div>
          <ul className={isOpen?"d-none d-lg-flex mt-3 p-5 navLink text-center":"navLinkactive p-0"}>
            <li className="list-unstyled"><a href="#Home" className="text-white text-decoration-none fw-bold  " onClick={closeMenu}>HOME</a></li>
            <li className="list-unstyled"><a href="#About" className="text-white text-decoration-none fw-bold  " onClick={closeMenu}>ABOUT</a></li>
            <li className="list-unstyled"><a href="#Skill" className="text-white text-decoration-none fw-bold  " onClick={closeMenu}>SKILLS</a></li>
            <li className="list-unstyled"><a href="#project" className="text-white text-decoration-none fw-bold  " onClick={closeMenu}>PROJECT</a></li>
            <li className="list-unstyled"><a href="#contact" className="text-white text-decoration-none fw-bold  " onClick={closeMenu}>CONTACT</a></li>
          </ul>
          <div className="d-flex d-lg-none menu-icon" onClick={menuToggel}>
           <i className="fa-solid fa-bars "style={{color:"white"}} ></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav