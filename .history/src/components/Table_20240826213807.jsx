import "./styling.css";



const Table = ({ sat }) => {
  let active = (operational) => {
    if (operational == true) {
      return "Active"
    }
    if (operational == false) {
      return "Inactive"
    }
  }
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
    {/* map function takes in array data, then provide index. This way is cleaner than before render time down to 275 ms --> actually they are apparently the same*/}
    {sat.map((data, id) => (
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{active(data.operational)}</td>
        </tr>
    ))}
     </tbody>
   </table>
  )
};

export default Table;