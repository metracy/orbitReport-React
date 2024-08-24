
let active = (operational) => {
  if (operational == true) {
    return "Active"
  }
  if (operational == false) {
    return "Inactive"
  }
}

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      
    {sat.map((id, data) {
      return (
        // switch to arrow function 
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{active(data.operational)}</td>
        </tr>
      );
    }
    )}
     </tbody>
   </table>
  );
};

export default Table;