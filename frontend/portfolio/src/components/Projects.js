// import {Projects} from "./Form.js";
import "../App.css";

import { Link, Router, Switch, Route } from "react-router-dom";

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
      <h1>show my projects</h1>
    </div>
  );
};

// const React = require("react");

// class Portfolio extends React.Component {
//   render() {
//     // console.log(this.props.fruits);
//     return (
//       <Projects title="Portfolio" stylesheet="/style.css" js="/app.js">
//         <ul className="homePage">
//           {this.props.form.map((proj) => {
//             return (
//               <li class="indexLi">
//                 {proj.title} {proj.description}
//               </li>
//             );
//           })}
//         </ul>
//       </Projects>
//     );
//   }
// }

// module.exports = Portfolio;
