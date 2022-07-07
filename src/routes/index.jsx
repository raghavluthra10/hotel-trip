import Components from "../pages/Components";
import Home from "../pages/Home";

const routes = [
  {
    title: "Home",
    path: "/",
    component: <Home />,
    key: 0,
  },
  {
    title: "Components",
    path: "/components",
    component: <Components />,
    key: 1,
  },
];

export default routes;
