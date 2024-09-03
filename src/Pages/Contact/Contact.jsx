import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="header">
        <h1>Contacto</h1>
      </div>
      <div className="body">
        <h3>Ante cualquier consulta, contactanos!</h3>
        <section className="contactGrid">
          <div className="div1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8310692165082!2d-58.37246272341113!3d-34.608433007748694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352cbe276f75%3A0xe16921ef0545f86d!2sCasa%20Rosada!5e0!3m2!1ses-419!2sar!4v1725321892380!5m2!1ses-419!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="div2">
            <FaPhone />
            <span>+56 999 999 999</span>
          </div>
          <a className="div3">
            <MdEmail />
            <span>lorem@ipsum.com</span>
          </a>
          <a className="div4">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a className="div5">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a className="div6">
            <FaLocationDot />
            <span>Cómo llegar</span>
          </a>
        </section>
      </div>
    </section>
  );
};
export default Contact;
