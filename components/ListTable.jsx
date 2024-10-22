const ListTable = ({ columnNames, data }) => {
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleString("en-US", options);
  }
  return (
    <>
      <div className="list-table">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {columnNames.map((item, index) => {
                  return <th key={"thead" + index}>{item?.displayName}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={"tbody" + index}>
                    {columnNames.map((innerItem, index) => {
                      return (
                        <td key={"td" + index}>
                          {innerItem?.elementName == "fileUnqName" && (
                            <img src="/icons/pdf.svg" />
                          )}
                          {innerItem?.elementName == "modifiedDate"
                            ? formatDate(item[innerItem?.elementName])
                            : item[innerItem?.elementName]
                            ? item[innerItem?.elementName]
                            : "-"}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListTable;
