import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React from "react";
import {useState} from "react";
import satData from "./components/satData";


function App() {
  const [sat, satData] = useState(satData);
  //This array holds two variables: sat and setSat. sat will be used to compare changes in state. setSat is a function that will be used to update the state. We set this array equal to the useState function. useState is passed satData. You will use these in the other components.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;