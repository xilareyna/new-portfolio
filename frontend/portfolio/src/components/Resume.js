import { Link, Router, Switch, Route } from "react-router-dom";
import "../App.css";

export default (props) => {
  return (
    <div>
      <ul className="ulNavBar">
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
      <button>
        <a
          href="https://docs.google.com/document/d/12km1nyqT1ZBBHJbBEfTEBxqYVEP69jsWe4iqTxp0RtI/edit?usp=sharing"
          target="_blank"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
};
