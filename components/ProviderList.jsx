import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TableActions from "./TableActions";
import { useRouter } from "next/router";

const ProviderList = ({
  label = "",
  countries,
  table,
  tableColumns,
  data,
  dataColors = [],
  tableFor = "",
  isSortBy = false,
  isStatus = false,
  isExportFile = true,
  documentStatus = [],
  areaHidden,
  displayAsLink = true,
}) => {
  const router = useRouter();
  const path = router.asPath.split("/").pop();

  const [tableData, setTableData] = useState([]);
  const [tableColumn, setTableColumn] = useState([]);
  useEffect(() => {
    setTableData(data);
    setTableColumn(tableColumns);
  }, [data, tableColumns, setTableColumn, setTableData]);

  return (
    <>
      <div className="flex-between">
        <span className="document-label">{label}</span>
        <p className={`document-label ${areaHidden && areaHidden}`}>
          <span>Total</span>
          <span>564325</span>
        </p>
      </div>
      <TableActions
        table={table}
        countries={countries}
        isSortBy={isSortBy}
        isStatus={isStatus}
        isExportFile={isExportFile}
        documentStatus={documentStatus}
      />
      {table && (
        <div className="list-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {tableColumn.map((item, index) => {
                    return (
                      <th className={item?.className} key={"thead" + index}>
                        {item?.displayName}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  return (
                    <tr key={"tbody" + index}>
                      <Link
                        style={{ pointerEvents: !displayAsLink && "none" }}
                        className="item"
                        href={`/AdminDashboard/${path}/${item["providerName"]}${
                          tableFor && `?type=${tableFor}`
                        }`}
                      >
                        {tableColumn.map((innerItem, index) => {
                          let sourceColor = "";
                          if (
                            innerItem.elementName === "documentUploadSource"
                          ) {
                            const matchedColor = dataColors.find(
                              (colorItem) =>
                                colorItem.documentUploadSource ===
                                item.documentUploadSource
                            );
                            sourceColor = matchedColor
                              ? matchedColor.color
                              : "";
                          }
                          return (
                            <td
                              key={"td" + index}
                              style={{
                                color:
                                  innerItem.elementName ===
                                  "documentUploadSource"
                                    ? sourceColor
                                    : "",
                              }}
                            >
                              {innerItem?.elementName == "country" && (
                                <Image
                                  width={40}
                                  height={30}
                                  src={`/icons/flags/${
                                    item[innerItem?.elementName]
                                  }.svg`}
                                  alt={innerItem?.elementName}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "";
                                  }}
                                />
                              )}
                              {item[innerItem?.elementName]}
                            </td>
                          );
                        })}
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProviderList;
