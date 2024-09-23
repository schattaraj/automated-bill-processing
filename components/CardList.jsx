import React, { useState } from 'react'
import ListTable from './ListTable'
import Dropdown from 'react-bootstrap/Dropdown';

function CardList({table, heading, tableColumns, tableData }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const handleChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return (
    <>
      <div className="card list-area">
        <div className="flex">
          <h6 className="heading">{heading}</h6>
          <div className="right">
            <div className="total">
              <span>Total</span>
              <span>554</span>
            </div>
            <select
              className="form-select"
              value={selectedMonth}
              onChange={handleChange}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                fontSize: '16px',
                backgroundColor: "#fff",
                color: "#000"
              }}
            >
              <option key={"month"}>
                Month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="actions">
          <input type="search" className="form-control search" placeholder='Search' />
          <select name="document_status" className="form-select">
            <option>Document Status</option>
            <option value="Status 1">Status 1</option>
            <option value="Status 2">Status 2</option>
          </select>
          <select name="sort_by" className="form-select">
            <option>Sort By</option>
            <option value="Ascending">Ascending</option>
            <option value="Decending">Decending</option>
          </select>
          <button className='btn btn-primary'><span>Search</span> <img src="/icons/search.svg" alt="" /></button>
          <button className='btn btn-primary'><span>Export File</span><img src="/icons/export_file.svg" alt="" /></button>
          <button className='btn btn-primary'><span>Move To</span><img src="/icons/move_to.svg" alt="" /></button>
          {/* <button className='btn btn-primary'><span>Create New</span><img src="/icons/create_new.svg" alt="" /></button> */}
          <Dropdown className='create-new'>
            <Dropdown.Toggle variant="primary" id="create_new">
            <span>Create New</span><img src="/icons/create_new.svg" alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/folder">Folder</Dropdown.Item>
              <Dropdown.Item href="#/link">Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='more'>
            <Dropdown.Toggle variant="primary" id="more">
              <img src="/icons/more.svg" alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/delete">Delete</Dropdown.Item>
              <Dropdown.Item href="#/edit">Edit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {
          table && <ListTable columnNames={tableColumns} data={tableData} />
        }        
      </div>
    </>
  )
}

export default CardList