import { Link, Router, Switch, Route } from "react-router-dom";
import "../App.css";
import css from "../styles/resume.css";

export default (props) => {
  return (
    <div className="resumeBody">
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
          <Link to={"/contact"} className="navLink">
            Contact
          </Link>
        </li>
        <li className="liNavBar">
          <Link to={"/resume"} className="navLink">
            Resume
          </Link>
        </li>
      </ul>
      <img src={"images/Resume.png"} className="resumeImg" />
      <br />
      <button className="resumeBtn">
        <a
          href="https://docs.google.com/document/d/12km1nyqT1ZBBHJbBEfTEBxqYVEP69jsWe4iqTxp0RtI/edit?usp=sharing"
          target="_blank"
          className="btnLinkResume"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
};
