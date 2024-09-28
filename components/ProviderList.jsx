import { ExitToApp, KeyboardArrowRight, Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const ProviderList = ({label, countries, table, tableColumns, data }) => {
  const [tableData, setTableData] = useState([])
  const [tableColumn, setTableColumn] = useState([])
  useEffect(()=>{
    setTableData(data)
    setTableColumn(tableColumns)
  },[data, tableColumns, setTableColumn, setTableData])
  return (
    <>
      <div className="flex-between">
        <span className="document-label">{label}</span>
        <p className="document-label">
          <span>Total</span>
          <span>564325</span>
        </p>
      </div>
      <div className="items-right">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search"
          sx={{ bgcolor: "white" }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {table && (
          <Form.Select
            className="form-elements"
            aria-label="Select Country"
            style={{ paddingRight: "5rem" }}
          >
            <option disabled defaultValue="">
              Country
            </option>
            {countries.map((country, index) => (
              <option key={country.name + index} href="#/action-1">
                {country.name}
              </option>
            ))}
          </Form.Select>
        )}

        <Button variant="primary" className="form-elements form-button">
          Search
        </Button>
        <Button variant="primary" className="form-elements form-button">
          Export File <ExitToApp />
        </Button>
      </div>
      {table && (
        <div className="list-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {tableColumn.map((item, index) => {
                    return <th className={item?.className} key={"thead" + index}>{item?.displayName}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  return (
                    <tr key={"tbody" + index}>
                      <Link className="item" href={`/AdminDashboard/${label}/${item["providerName"]}`}>
                        {tableColumn.map((innerItem, index) => {
                          return (
                       
                            <td key={"td" + index}>
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
