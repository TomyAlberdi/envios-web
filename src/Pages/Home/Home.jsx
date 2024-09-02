import Introduction from "../../Components/Introduction/Introduction";
import ServicesList from "../../Components/ServicesList/ServicesList";

const Home = () => {
  return (
    <section className="Home">
      <div className="header">
        <h3>Lorem ipsum dolor </h3>
        <h1>Lorem ipsum dolor sit amet</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
      </div>
      <Introduction />
      <h2 className="titleServices">Nuestros Servicios</h2>
      <ServicesList />
    </section>
  );
};
export default Home;
