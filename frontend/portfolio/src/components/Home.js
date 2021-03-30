import "../App.css";
import { useRef, useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, Card } from "react-bootstrap";

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
      <hr />
      <h3 className="homeRecentProj">Recent Projects</h3>
      <ul className="projectPostsHome">
        {form.slice(0, 3).map((item) => {
          return (
            <li key={item._id} className="homeProjLi">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title id="cardTitleHome">
                    <Link
                      to={`/project/${item._id}`}
                      className="projCardLinkHome"
                    >
                      {item.title}
                    </Link>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <img src={item.image} className="homeProjImg"></img>
                  </Card.Text>
                </Card.Body>
              </Card>

              <br />
            </li>
          );
        })}
      </ul>
      <button className="seeMoreBtn">
        <Link to={"/portfolio"} className="seeMoreBtnLink">
          See More
        </Link>
      </button>

      <footer className="footerIcons">
        <ul className="ulFooterIcons">
          <li className="liFooterIcons">
            <Link
              to={{ pathname: "https://www.instagram.com/xila___/" }}
              target="_blank"
              className="footerIconLink"
            >
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li className="liFooterIcons">
            <Link
              to={{ pathname: "https://github.com/xilareyna" }}
              target="_blank"
              className="footerIconLink"
            >
              <i class="fab fa-github"></i>
            </Link>
          </li>
          <li className="liFooterIcons">
            <Link
              to={{ pathname: "https://www.linkedin.com/in/xilareyna/" }}
              target="_blank"
              className="footerIconLink"
            >
              <i class="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
