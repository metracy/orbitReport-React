import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React from "react";
import useState from React;
import satData from "./components/satData";

function App() {
  const [sat, satData] = useState(satData);
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;