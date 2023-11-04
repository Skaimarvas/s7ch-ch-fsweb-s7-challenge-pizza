import "./App.css";

import banner from "./Assets/banner.png.png";
import logo from "./Assets/logo.svg";

function App() {
  const imageStyle = {
    width: "900px",
    height: "350px",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
  };
  const imageStyle1 = {
    width: "250px",
    height: "40px",
  };

  return (
    <>
      <div className="mt-9 flex items-center justify-center">
        <div className=" mx-auto my-auto absolute">
          <img src={logo} alt="logo" style={imageStyle1} />{" "}
        </div>
      </div>
      <div
        style={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: "3.5rem",
          lineHeight: "60px",
          color: "white",
          marginTop: "6rem",
        }}
      >
        {" "}
        <p> KOD ACIKTIRIR </p>
        <p> PİZZA, DOYURUR</p>{" "}
      </div>
      <div
        style={{
          fontFamily: "Barlow , sans-serif",
          backgroundColor: "#FDC913",
          borderRadius: "50px",
          marginLeft: "34rem",
          marginRight: "34rem",
          marginTop: "1rem",
          padding: "0.5rem 2rem",
        }}
      >
        <p>ACIKTIM</p>{" "}
      </div>

      <img className="mb-0" src={banner} style={imageStyle} />
    </>
  );
}

export default App;
