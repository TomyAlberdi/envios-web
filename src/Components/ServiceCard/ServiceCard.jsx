/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <article className="ServiceCard">
      <section
        className="image"
        style={{ backgroundImage: `url(${data.img_url})` }}
      ></section>
      <section className="data">
        <h3>{data.title}</h3>
        <p>
          {data.description}
        </p>
        <Link to={`/servicios/${data.url}`}>
          VER MÁS
        </Link>
      </section>
    </article>
  );
};
export default ServiceCard;
