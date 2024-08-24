const Buttons = ({ filterByType, setSat, displaySats }) => {
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
      <button>All Orbits</button>
    </div>
  );
};

export default Buttons;