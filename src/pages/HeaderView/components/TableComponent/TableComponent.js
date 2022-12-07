

export default function TableComponent(data) {
  const displayTableData = (tableData) => {
    return tableData.map((element) => {
      return <li>{element}</li>;
    });
  };

  const createTableCard = () => {
    
    return data.data.map((table) => {
      return (
        <table key={table.id} className="skill-table">
          <tr>
            <th className="table-header">{table.header_name}</th>
          </tr>
          <tr>
            <div className="table-content">{displayTableData(table.data)}</div>
          </tr>
        </table>
      );
    });
  };

  return (
    <div className="table-component-wrap" data-aos="fade-left">
      <h3>Skills & Knowledge</h3>
      <div className="tables-container">{createTableCard()}</div>
    </div>
  );
}

