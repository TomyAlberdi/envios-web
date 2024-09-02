/* eslint-disable react/prop-types */
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
      </section>
    </article>
  );
};
export default ServiceCard;
