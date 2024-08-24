
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
     <tr key = {id}>
     <td>{data.name}</td>
     <td>{data.name}</td>
     <td>{data.name}</td>
     
     </tr>
     </tbody>
   </table>
  );
};

export default Table;