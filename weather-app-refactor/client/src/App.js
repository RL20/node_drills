import "./App.css";
import React, { useState, useEffect } from "react";
import { getWeatherData } from "./api.js";

function App() {
  const [address, setAdress] = useState("");
  const [showData, setShowData] = useState({});
  // console.log("Client side javascript file is loaded!");
  const handleInput = (e) => {
    e.preventDefault();
    // console.log(`e.target.value`, e.target.value);
    // return e.target.value;
    setAdress(e.target.value);
  };
  const info = async () => {
    const data = await getWeatherData(address);

    setShowData(data);
  };
  return (
    <div>
      <p>Use this site to get your weather!</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Location" onChange={handleInput} />
        {/* <button onClick={() => console.log("address", address)}>Search</button> */}
        <button onClick={info}>Search</button>
        {showData && (
          <div>
            <h3>{showData.address}</h3>
            <h3>{showData.forecast}</h3>
            <h3>{showData.location}</h3>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
