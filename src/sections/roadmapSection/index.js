import Image from "../../assets/images/roadmap.png";
import "./style.css";

const Index = () => {
  return (
    <section
      className="py-16 mb-2 bg-dark text-center sm:text-left"
      id="roadmap"
    >
      <div className="container">
        <h2 className="font-serif text-primary text-3xl  mb-10">Roadmap</h2>
        <div className="w-full">
          <Card />
          <Card />
          <Card />
          <Card line={false} />
        </div>
      </div>
    </section>
  );
};

export default Index;

const Card = ({ line = true }) => (
  <div className="w-full flex justify-between items-center card">
    <div
      className={`w-12 h-12 rounded-full bg-primary hidden md:block ${
        !line ? "null" : "circle"
      }      relative`}
    ></div>
    <div
      style={{ boxShadow: "8px 8px 2px 0 rgba(200, 55, 171, 1)" }}
      className="md:w-11/12 w-full p-4 sm:p-8 my-16 sm:pr-0 bg-primary rounded-lg sm:flex sm:flex-row-reverse"
    >
      <div className="w-20 sm:w-40  mx-auto sm:-mt-12 ">
        <img src={Image} alt="profile" className="sm:w-full" />
      </div>
      <div className="text-dark sm:text-left sm:flex-1">
        <h6 className="font-serif mt-5 mb-5 sm:tracking-widest sm:mb-3 sm:mt-0 sm:text-2xl ">
          Lorem ipsum dolor sit amet
        </h6>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          tortor, sem id sit risus ultricies. In mauris, tellus nunc.
        </p>
      </div>
    </div>
  </div>
);
