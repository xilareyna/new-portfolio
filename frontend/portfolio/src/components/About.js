import { Link, Router, Switch, Route } from "react-router-dom";
import "../App.css";
import css from "../styles/about.css";

export default (props) => {
  return (
    <div className="aboutDiv">
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
      <img src={"images/meTower.jpg"} className="xilaTower" />

      <h1 className="aboutH1">Who am I?</h1>

      <h5 className="aboutMe">
        I am a software developer, designer, dogmom and foodie. I currently
        reside in Austin, Texas which happens to be known as the Live Music
        Capital of The World.
      </h5>
      <h1 className="aboutH1">What am I specialized in?</h1>
      <h5 className="aboutMe">
        As a Full-Stack developer, I am able to build both Front-end and
        Back-end applications. I have a love for visualizations so Front-end is
        a creative passion of mine.
      </h5>
    </div>
  );
};
