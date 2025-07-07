import Header from "../Header";
import "../../styles/components/_main.scss";
import vf from "../../assets/CarMainFull1x.png";

const Main = () => {
  return (
    <main className="page">
      <Header />
      <div className="drivingContainer">
        <div className="pc1">
          <img src={vf} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Main;
