import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import IndividualService from "./Pages/IndividualService/IndividualService.jsx";

const CustomRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/nosotros",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />,
        },
      ],
    },
    {
      path: "/servicios",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Services />,
        },
      ],
    },
    {
      path: "/servicios/:url",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndividualService />,
        },
      ],
    },
    {
      path: "/contacto",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Contact />,
        },
      ],
    }
  ]);
};

export default CustomRouter;
