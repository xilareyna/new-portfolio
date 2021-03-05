import { Link, Router, Switch, Route } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <ul className="ulNavBar">
        <li className="liNavBar">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="liNavBar">
          <Link to={"/about"}>About</Link>
        </li>

        <li className="liNavBar">
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="liNavBar">
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
      <h1>welcome</h1>
    </div>
  );
};
