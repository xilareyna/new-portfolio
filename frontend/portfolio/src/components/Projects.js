// import {Projects} from "./Form.js";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import css from "../styles/portfolio.css";

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
    <div className="projBody">
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
      <h1 className="projH1">My Projects</h1>
      <ul className="ulProjPosts">
        {form.map((item) => {
          return (
            <li key={item._id} className="liProjPosts">
              <h1 className="portfolioTitle">{item.title}</h1>
              <br />
              <i class={item.description}></i>

              <br />
              <img src={item.image} className="portfolioImg" />
              <br />
              <Button
                onClick={() => props.history.push(`/project/${item._id}`)}
                variant="secondary"
              >
                See more
              </Button>
            </li>
          );
        })}
        <br />
      </ul>
    </div>
  );
};
