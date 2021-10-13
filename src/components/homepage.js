import carga from "../images/carga.gif";
import Logo from "../images/Logo.png";
import rotatezombie from "../images/rotatezombie.gif";
import Imgmobile from "../images/Imgmobile.png";

export default function HomepageFunction() {
  return (
    <div>
      <div className="container">
        <div className="img-container">
          <img className="rotete-carga" src={carga} alt="" />
          <img className="rotete-gif" src={rotatezombie} alt="" />
        </div>
        <div className="img-fix">
          <img src={Imgmobile} alt="" />
        </div>
        <div className="text-container">
          <img className="title" src={Logo} alt="" />
          <h1 className="h1-message">
            Don't run from the walking dead, just join them!
          </h1>
          <h1 className="h1-message-mobile">
            Don't run from the walking dead, just join them!
          </h1>
          <h2 className="h2-message">
            Hand-drawn, from initial sketch to final digital art, created by our
            genius artist Ra-art
          </h2>
        </div>
      </div>
    </div>
  );
}
