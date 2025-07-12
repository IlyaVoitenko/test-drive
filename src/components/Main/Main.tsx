import Header from "../Header";
import "../../styles/components/_main.scss";
import c from "../../assets/CarMainFull1x.png";

const Main = () => {
  return (
    <main className="page">
      <Header />
      <div className="drivingContainer">
        <picture className="pc1"></picture>
        <picture className="pc2"></picture>
        <div className="block1">
          <div className="rside">{/* <img src={c} alt="" /> */}</div>
          <div className="lside"></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
