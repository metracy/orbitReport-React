
let active = (operational) => {
  if (operational == 1) {
    return "Active"
  }
  if (operational == 0) {
    return "Inactive"
  }
}

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
      {/* Start by updating the table header. It needs a total of four <th> tags. They need to hold text for the following data points: Name, Type of Satellite, Launch Date, and Status. */}
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {/* The map function will return data to each row in the table.
The <tr> tag in the table body needs a key. Set the key equal to the id.
Create a total of four <td> tags.
Use dot notation to assign the correct object key. The code below would render the name of a satellite. */}
    {sat.map(id, data) => (
     // switch to arrow function 
     <tr key = {id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{active(data.operational)}</td>
     </tr>
    )}
     </tbody>
   </table>
  );
};

export default Table;