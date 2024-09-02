import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";

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
      <div className="services">
        <Link to={"/servicios/mercado-envios-flex"}>
          <RiArrowRightDoubleLine />
          <span>Mercado Envios Flex</span>
        </Link>
        <Link to={"/servicios/envíos-e-commerce"}>
          <RiArrowRightDoubleLine />
          <span>Envíos E-Commerce</span>
        </Link>
        <Link to={"/servicios/mensajeria-particular"}>
          <RiArrowRightDoubleLine />
          <span>Mensajería Particular</span>
        </Link>
      </div>
      <div className="contact">contact</div>
    </footer>
  );
};
export default Footer;
