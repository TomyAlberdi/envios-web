import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <section className="logoName">
        <img src="/delivery-blue.svg" alt="logo" />
        <div className="name">
          <h2>Nombre</h2>
          <p>Subtítulo</p>
        </div>
      </section>
      <nav>
        <Link>Inicio</Link>
        <Link>Nosotros</Link>
        <Link>Servicios</Link>
        <Link>Contacto</Link>
      </nav>
    </div>
  );
};
export default Navbar;
