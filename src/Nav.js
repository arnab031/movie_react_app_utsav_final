import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { BiSearch } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const [change, setChange] = useState("");
  const history = useHistory();
  const inputOnChange = (e) => {
    setChange(e.target.value);
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const search = () => {
    console.log(change);
    history.push(`/search/${change}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    // <div className={`nav ${show && "nav__black"}`}>
    //   <div className="nav__contents">
    //     <img
    //       className="nav__logo"
    //       src="https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"
    //       alt="site logo"
    //     />

    //     <ul className="nav__item">
    //       <li className="nav__link"><Link activeClass="active" to="Upcoming Movies" offset={-150} spy={true} smooth={true}>Upcoming</Link></li>
    //       <li><Link  to="Latest" offset={-150} spy={true} smooth={true} >Latest</Link></li>
    //       <li><Link  to="Popular" offset={-150} spy={true} smooth={true}>Popular</Link></li>
    //       <li><Link  to="top-rated" offset={-150} spy={true} smooth={true}>Top-Rated</Link></li>
    //     </ul>
    //     <div className="form-search">
    //         <input type="search" name="search" placeholder="Search Movie" onChange={(e) => inputOnChange(e)}/>
    //         <button type="submit" onClick={search}><BiSearch/></button>

    //     </div>
    //     <img className="nav__avatar" src={avatar_logo} alt="avatar logo" />
    //   </div>
    // </div>
    <div className={`nav ${show && "nav__black"}`}>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <FaBars />
          </label>
          <div className="content">
            <div
              className="logo"
              onClick={() => {
                history.push(`/`);
              }}
            >
              Movie
            </div>
            <ul className="links">
              <li>
                <Link
                  activeClass="active"
                  to="Upcoming Movies"
                  offset={-80}
                  spy={true}
                  smooth={true}
                >
                  Upcoming
                </Link>
              </li>
              <li>
                <Link to="Latest" offset={-80} spy={true} smooth={true}>
                  Latest
                </Link>
              </li>
              <li>
                <Link to="Popular" offset={-80} spy={true} smooth={true}>
                  Popular
                </Link>
              </li>
              <li>
                <Link to="top-rated" offset={-80} spy={true} smooth={true}>
                  Top-Rated
                </Link>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <BiSearch />
          </label>
          <div className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              onChange={(e) => inputOnChange(e)}
              required
            />
            <button type="submit" className="go-icon" onClick={search}>
              <BiRightArrowAlt />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
