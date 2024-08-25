import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats, satData}) => {
  return (
    <div className="flex-container">
      {/* Provide two callbacks for the map function: id and sat. */ }
    {displaySats.map((sat) => {
    return (
    <button onClick={() => filterByType(sat)} key={sat.id}>
      {sat} Orbit
    </button>
    );
  })}
  {/* Incorrectly called setSat */}
    <button onClick={() => setSat(satData)}>
      All Orbits
    </button>
    </div>
  )
};

export default Buttons;