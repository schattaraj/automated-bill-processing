import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
const ListTable = ({ columnNames, data, selectedMonth, sortBy }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // This ensures the component has mounted on the client
  }, []);
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleString("en-US", options).replace(" ", ",");
  }
  const sortedData = (data) => {
    return data.sort((a, b) => {
      if (sortBy === "Decending") {
        return b.modifiedDate - a.modifiedDate; // Descending order by modifiedDate
      } else {
        return a.modifiedDate - b.modifiedDate; // Ascending order by modifiedDate (Unix timestamp)
      }
    });
  };
  const filteredData = selectedMonth
    ? data.content.filter((item) => {
        const formattedDate = formatDate(item?.modifiedDate);
        const [month] = formattedDate.split(","); // Extract month
        return month === selectedMonth;
      })
    : data.content;
  const sortedFilteredData = sortedData(filteredData);
  return isMounted ? (
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
              {sortedFilteredData.length > 0 ? (
                sortedFilteredData.map((item, index) => {
                  return (
                    <tr key={"tbody" + index}>
                      {columnNames.map((innerItem, index) => {
                        return (
                          <td key={"td" + index}>
                            {innerItem?.elementName === "fileUnqName" && (
                              <img src="/icons/pdf.svg" alt="file-icon" />
                            )}
                            {innerItem?.elementName === "modifiedDate"
                              ? formatDate(item[innerItem?.elementName])
                              : item[innerItem?.elementName]
                              ? item[innerItem?.elementName]
                              : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr
                  className="position-absolute w-100 text-center p-4"
                  style={{ color: "gray" }}
                >
                  <img
                    src="/icons/noData.png"
                    width={40}
                    height="auto"
                    className="mx-2 p-0"
                  />
                  No data available
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center p-4">
      <ScaleLoader />
    </div>
  );
};

export default ListTable;
