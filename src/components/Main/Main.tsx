import Header from "../Header";
import "../../styles/components/_main.scss";
import carDefault1x from "../../assets/CarMain.webp";
import carDefault2x from "../../assets/CarMain_2x.webp";
import carDefault3x from "../../assets/CarMain_3x.webp";

const Main = () => {
  return (
    <main className="page">
      <Header />
      <div className="drivingContainer">
        <div className="pictureLeft"></div>
        <div className="pictureRight"></div>
        <div className="contentContainer">
          <h1 className="title">Driving Redefined</h1>
          <p className="subtitle">
            Our impressive line-up of cars will make your car decision process
            much faster and easier
          </p>
        </div>
        <picture className="carPicture">
          <source
            srcSet={`${carDefault1x} 1x, ${carDefault2x} 2x, ${carDefault3x} 3x`}
            type="image/webp"
          />
          <img
            src={carDefault1x}
            className="carImage"
            alt="Car"
            height={824}
            width={1435}
          />
        </picture>
      </div>
    </main>
  );
};

export default Main;
