import list from "../../Utils/ServicesData.json";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const ServicesList = () => {
  return (
    <div className="ServicesList">
      {list.map((item, index) => {
        return <ServiceCard key={index} data={item} />;
      })}
    </div>
  );
};
export default ServicesList;
