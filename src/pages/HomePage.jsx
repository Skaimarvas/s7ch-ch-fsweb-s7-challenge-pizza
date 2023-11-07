import { Link } from "react-router-dom/cjs/react-router-dom.min";
import banner from "../Assets/banner.png.png";
import logo from "../Assets/logo.svg";

const HomePage = () => {
  const imageStyle = {
    maxWidth: "900px",
    maxHeight: "350px",
  };
  const imageStyle1 = {
    width: "250px",
    height: "40px",
  };

  return (
    <>
      <div className="mt-10 flex flex-col items-center">
        <img className="mx-auto" src={logo} alt="logo" style={imageStyle1} />{" "}
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "3.5rem",
            lineHeight: "60px",
            color: "white",
          }}
        >
          {" "}
          <p> KOD ACIKTIRIR </p>
          <p> PİZZA, DOYURUR</p>{" "}
        </div>
        <div
          className="mt-10 mx-auto"
          style={{
            fontFamily: "Barlow , sans-serif",
            backgroundColor: "#FDC913",
            borderRadius: "50px",
            width: "6.8rem",
            padding: "0.5rem 1rem",
          }}
        >
          <Link to="/pizza" exact>
            <p> ACIKTIM</p>
          </Link>
        </div>
      </div>

      <img
        className="fixed bottom-0 left-1/2 -translate-x-1/2"
        style={imageStyle}
        src={banner}
      />
    </>
  );
};

export default HomePage;
