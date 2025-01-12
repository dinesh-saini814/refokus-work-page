import Marque from "./Marque";
import MarqueData from "./MarqueData";

const images = MarqueData.images;

const Marquees = () => {
  return (
    <div className=" py-20 mt-20 ">
      {images.map((item, i) => (
        <Marque key={i} image={item} />
      ))}
    </div>
  );
};

export default Marquees;
