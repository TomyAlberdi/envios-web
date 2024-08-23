import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";

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
  ]);
};

export default CustomRouter;
