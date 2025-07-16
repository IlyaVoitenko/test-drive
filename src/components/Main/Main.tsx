import Header from "../Header";
import "../../styles/components/_main.scss";

const Main = () => {
  return (
    <main className="page">
      <Header />
      <div className="drivingContainer">
        <div className="pictureLeft"></div>
        <div className="pictureRight">
          <picture className="carPicture">
            <source
              srcSet="../../assets/CarMain_2x.webp 2x, ../../assets/CarMain_3x.webp 3x"
              type="image/webp"
            />
            <img
              src="../../assets/CarMain.jpg"
              alt="Car"
              height={824}
              width={1435}
            />
          </picture>
        </div>
        <div className="contentContainer">
          <h1 className="title">Driving Redefined</h1>
          <p className="subtitle">
            Our impressive line-up of cars will make your car decision process
            much faster and easier
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
