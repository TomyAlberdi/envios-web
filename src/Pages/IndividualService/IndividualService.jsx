import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ServicesData from "../../Utils/ServicesData.json";
import list from "../../Utils/ServicesData.json";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const IndividualService = () => {
  const url = useParams().url;

  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(ServicesData?.find((item) => item.url === url));
  }, [url]);

  return (
    <section className="IndividualService">
      <section className="serviceInfo">
        <div
          className="div1"
          style={{ backgroundImage: `url(${Data?.img_url})` }}
        ></div>
        <div className="div2">
          <h1>{Data?.title}</h1>
        </div>
        <div className="div3">
          <p>{Data?.long_description}</p>
        </div>
      </section>
      <section className="relatedServices">
        <h2>Nuestros otros servicios:</h2>
        <div className="relatedServicesList">
          {list.map((item, index) => {
            if (item.url !== Data?.url) {
              return <ServiceCard key={index} data={item} />;
            }
          })}
        </div>
      </section>
    </section>
  );
};
export default IndividualService;
