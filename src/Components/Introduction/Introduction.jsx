const Introduction = () => {
  return (
    <div className="Introduction">
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
      <h2>Por qué elegirnos</h2>
      <section className="list">
        <article>
          <div className="svgContainer">
            <object data="icon-time.svg" type="image/svg+xml"></object>
          </div>
          <div className="dataContainer">
            <h3>VELOCIDAD</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit gravida
              ultrices, maecenas magnis mus orci porttitor quisque ultricies.
              Potenti congue habitasse habitant taciti curabitur dui tempus id
              malesuada, risus augue facilisi ac vulputate iaculis volutpat
              morbi.
            </p>
          </div>
        </article>
        <article>
          <div className="dataContainer">
            <h3>RESPONSABILIDAD</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit gravida
              ultrices, maecenas magnis mus orci porttitor quisque ultricies.
            </p>
          </div>
          <div className="svgContainer">
            <object data="icon-security.svg" type="image/svg+xml"></object>
          </div>
        </article>
        <article>
          <div className="svgContainer">
            <object data="icon-area.svg" type="image/svg+xml"></object>
          </div>
          <div className="dataContainer">
            <h3>COBERTURA</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit gravida
              ultrices, maecenas magnis mus orci porttitor quisque ultricies.
              Potenti congue habitasse habitant taciti curabitur dui tempus id
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Introduction;
