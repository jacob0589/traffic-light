import React, {useState,useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const colors = ["red","yellow","green"];
const Home = () => {
	const [selectedColor, setSelectedColor] = useState(0);

	const colorChange = () => {
		setSelectedColor((selectedColor+1) % colors.length);
	}

	return (
		<div className="traffic-light bg-dark m-auto p-1 d-inline-block ">
			<div
        role="button"
        onClick={colorChange}
        className={`bg-danger m-2 light ${
          selectedColor === 0 ? "glow" : ""
        }`}
      ></div>
      <div
        role="button"
        onClick={colorChange}
        className={`bg-warning m-2 light ${
          selectedColor === 1 ? "glow" : ""
        }`}
      ></div>
      <div
        role="button"
        onClick={colorChange}
        className={`bg-success m-2 light ${
          selectedColor === 2 ? "glow" : ""
        }`}
      ></div>
			<button onClick={colorChange}>Change color</button>
		</div>
	)
 
};

export default Home;
