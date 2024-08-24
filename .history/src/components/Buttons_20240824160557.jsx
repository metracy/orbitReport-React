import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats, satData}) => {
  return (
    <div>
      {/* Provide two callbacks for the map function: id and sat. */ }
    {displaySats.map((sat, id) => {
    return (
    <button onClick={() => filterByType(sat)} key={id}>
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