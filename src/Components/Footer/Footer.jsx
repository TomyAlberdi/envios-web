import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="menu">
        <Link to={"/"}>
          <IoIosArrowDroprightCircle />
          <span>Inicio</span>
        </Link>
        <Link to={"/nosotros"}>
          <IoIosArrowDroprightCircle />

          <span>Nosotros</span>
        </Link>
        <Link to={"/servicios"}>
          <IoIosArrowDroprightCircle />

          <span>Servicios</span>
        </Link>
        <Link to={"/contacto"}>
          <IoIosArrowDroprightCircle />

          <span>Contacto</span>
        </Link>
      </div>
      <div className="services">services</div>
      <div className="contact">contact</div>
    </footer>
  );
};
export default Footer;
