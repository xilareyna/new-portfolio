import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Form from "./components/Form.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";

const routes = [
  {
    path: "/about",
    name: "About me",
    component: About,
  },

  {
    path: "/contact",
    name: "Contact me",
    component: Contact,
  },
  {
    path: "/form",
    name: "Portfolio form",
    component: Form,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Projects,
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

export default routes;
