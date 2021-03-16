import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Form from "./components/Form.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Show from "./components/Show.js";

const routes = [
  {
    path: "/project/:id",
    name: "Show",
    component: Show,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
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
    path: "/portfolio",
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
