import "../App.css";
import { useRef, useEffect, useState } from "react";

import { Link, Router, Switch, Route } from "react-router-dom";
import css from "../styles/home.css";
export default (props) => {
  const [form, setForm] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/form");
      const json = await response.json();
      setForm(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <ul className="posts">
        {form.slice(0, 3).map((item) => {
          return (
            <li key={item._id} className="journal">
              <br />
              <h3>
                {item.title} {item.description}
              </h3>
              <p>{item.image}</p>
              <br />
            </li>
          );
        })}
      </ul>
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
