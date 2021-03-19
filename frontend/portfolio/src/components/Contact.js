import { Link, Router, Switch, Route } from "react-router-dom";
import "../App.css";
import css from "../styles/contact.css";

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
      <img src={"images/contact.png"} className="contactImg" />
      <ul className="contactBtns">
        <li className="emailBtn">
          <a href={"mailto:xilareyna@gmail.com"}>
            <img src={"images/email.png"} className="emailImg" />
            <br />
            Email Me
          </a>
        </li>
      </ul>
    </div>
  );
};
