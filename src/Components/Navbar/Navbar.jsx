import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <section className="logoName">
        <img src="/delivery-white.svg" alt="logo" />
        <h2>Envíos Nombre</h2>
      </section>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Inicio</span>
        </NavLink>
        <NavLink
          to={"/nosotros"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Nosotros</span>
        </NavLink>
        <NavLink
          to={"/servicios"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Servicios</span>
        </NavLink>
        <NavLink
          to={"/contacto"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Contacto</span>
        </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
