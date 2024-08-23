import Navbar from "./../Components/Navbar/Navbar.jsx";
import Footer from './../Components/Footer/Footer.jsx';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
