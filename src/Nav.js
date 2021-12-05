import React, { useEffect, useState } from "react";
import "./Nav.css";
import avatar_logo from "./img/avatar.png";

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"
          alt="site logo"
        />
        <img className="nav__avatar" src={avatar_logo} alt="avatar logo" />
      </div>

    </div>
  );
}

export default Nav;
