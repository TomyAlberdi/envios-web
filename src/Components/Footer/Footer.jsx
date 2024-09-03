import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import ServicesData from "../../Utils/ServicesData.json";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        {
          ServicesData.map((item, index) => {
            return <Link to={`/servicios/${item.url}`} key={index}>
              <RiArrowRightDoubleLine />
              <span>{item.title}</span>
            </Link>
          })
        }
      </div>
      <div className="contact">
        <a href="https://www.google.com/" target="_blank" className="instagramLink"> 
          <FaInstagram />
        </a>
        <a href="mailto:lorem@ipsum.com" target="_blank" className="emailLink">
          <MdEmail />
        </a>
      </div>
      <div className="info">
        <span>Copyright © 2024 - Lorem Ipsum. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
