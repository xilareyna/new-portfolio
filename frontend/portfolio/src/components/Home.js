import "../App.css";
// import Pic from "../public/Xila.png";

import { Link, Router, Switch, Route } from "react-router-dom";
import css from "../styles/home.css";
export default (props) => {
  return (
    <div>
      <ul className="ulNavBar">
        <li className="initial">XJR</li>
        <li className="liNavBar">
          <Link to={"/"} className="navLink">
            Home
          </Link>
        </li>
        <li className="liNavBar">
          <Link to={"/about"} className="navLink">
            About
          </Link>
        </li>

        <li className="liNavBar">
          <Link to={"/portfolio"} className="navLink">
            Portfolio
          </Link>
        </li>
        <li className="liNavBar">
          <Link to={"/Contact"} className="navLink">
            Contact
          </Link>
        </li>
        <li className="liNavBar">
          <Link to={"/resume"} className="navLink">
            Resume
          </Link>
        </li>
      </ul>
      <h1 className="homeHeading">
        <img src={"images/Me.png"} className="xilaImg" />
      </h1>
      <h3 className="homeTitle">
        Software Engineer | Designer | Creative Thinker{" "}
      </h3>
      <h3>Recent Projects</h3>
      <button>
        <Link to={"/portfolio"}>See More</Link>
      </button>
      <h3>Say Hello</h3>
      <p>
        I am blah jskdfnsafsd i love my dog and i loooove enfinerrringgggg YAAAy
      </p>
      <i class="fab fa-instagram">
        <Link to={"/about"}></Link>
      </i>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
    </div>
  );
};
