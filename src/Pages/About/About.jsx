import LocationInfo from "../../Components/LocationInfo/LocationInfo";
import Nosotros from "../../Components/Nosotros/Nosotros";

const About = () => {
  return (
    <section className="About">
      <div className="header">
        <h1>Quienes somos</h1>
      </div>
      <svg
        viewBox="-0.957 98.0221 401.923 301.8459"
        xmlns="http://www.w3.org/2000/svg"
        className="decorationSvg1"
      >
        <polygon
          style={{fill: "rgb(38, 100, 187)", transformOrigin: "50.0005px 150.066px"}}
          points="100.001 200 100 100.132 0 149.83"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        />
        <polygon
          style={{fill: "rgb(0, 123, 225)", transformOrigin: "50.0005px 349.934px"}}
          points="100.001 399.868 100 300 0 349.698"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        />
        <polygon
          style={{fill: "rgb(99, 159, 207)", transformOrigin: "150.001px 300.395px"}}
          points="200.001 350.329 200 250.461 100 300.159"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        />
        <polygon
          style={{fill: "rgb(38, 100, 187)", transformOrigin: "49.939px 299.976px"}}
          points="100 250.053 99.999 350.458 -0.123 299.933"
        />
        <polygon
          style={{fill: "rgb(0, 123, 225)", transformOrigin: "150px 200.471px"}}
          points="200 250.405 199.999 150.537 99.999 200.235"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        />
        <polygon
          style={{fill: "rgb(37, 35, 141)", transformOrigin: "250px 150.066px"}}
          points="300 200 299.999 100.132 199.999 149.83"
          transform="matrix(-1, 0, 0, -1, 0.000030517578, 0)"
        />
        <polygon
          style={{fill: "rgb(37, 35, 141)", transformOrigin: "51.798px 117.754px"}}
          points="99.639 99.05 100.636 149.416 -0.341 101.028"
          transform="matrix(0.999804019928, 0.019779004157, -0.019779004157, 0.999804019928, -3.00182e-7, 1.47126e-7)"
        />
        <polygon
          style={{fill: "rgb(0, 123, 225)", transformOrigin: "149.198px 117.718px"}}
          points="198.036 136.406 199.033 86.014 98.055 134.428"
          transform="matrix(-0.999804019928, 0.019779004157, -0.019779004157, -0.999804019928, -0.000002239574, -0.000001852497)"
        />
        <polygon
          style={{fill: "rgb(38, 100, 187)", transformOrigin: "250px 250.066px"}}
          points="300 300 299.999 200.132 199.999 249.83"
          transform="matrix(-1, 0, 0, -1, 0.000030517578, 0)"
        />
        <polygon
          style={{fill: "rgb(0, 123, 225)", transformOrigin: "348.24px 119.696px"}}
          points="396.081 140.342 397.087 89.503 296.101 138.364"
          transform="matrix(-0.999804019928, 0.019779004157, -0.019779004157, -0.999804019928, 0.000035804834, -0.00000241431)"
        />
      </svg>
      <Nosotros />
      <LocationInfo />
    </section>
  );
};
export default About;
