import { useState, useEffect, useRef } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import css from "../styles/show.css";

export default function Show(props) {
  const [item, setItem] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/form/${props.match.params.id}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="showBody">
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
      <ul className="showUl">
        <li key={item._id} className="showLi">
          <h1 className="showH1">{item.title}</h1>

          <br />
          <img src={item.image} className="showImg"></img>

          <p>
            Technologies used:
            <br />
            {item.description}
          </p>
          <br />
        </li>
      </ul>
    </div>
  );
}
