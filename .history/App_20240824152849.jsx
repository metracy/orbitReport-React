import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
// not importing correctly?
import satData from "./components/satData";

import React from "react";
import { useState } from "react";



function App() {
  const [sat, setSat] = useState(satData);
  //This array holds two variables: sat and setSat. sat will be used to compare changes in state. setSat is a function that will be used to update the state. We set this array equal to the useState function. useState is passed satData. You will use these in the other components.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];	
  const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};
  return (
    <div>
      <Banner />
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      {/* Incorrect table  component fixed! */}
      <Table sat={sat}/>
    </div>
  );
}

export default App;