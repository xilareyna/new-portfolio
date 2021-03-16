// import {Projects} from "./Form.js";
import { React, useState, useEffect } from "react";

import "../App.css";

import { Link, Router, Switch, Route } from "react-router-dom";

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
      <h1>show my projects</h1>
      <ul className="posts">
        {form.map((item) => {
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
    </div>
  );
};
