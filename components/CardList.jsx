import React, { useState } from "react";
import ListTable from "./ListTable";
import Dropdown from "react-bootstrap/Dropdown";
import FolderList from "./FolderList";
import { months } from "@/utils/constants";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TablePagination,
} from "@mui/material";
import { FileDownload } from "@mui/icons-material";

function CardList({
  table,
  heading,
  tableColumns,
  tableData,
  folderList,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [sortBy, setSortBy] = useState("Ascending");
  const handleChangeMonth = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };
  const handleExportClick = () => {
    setShowModal(true); // Show the modal
  };
  const handleDownload = async (fileId, fileName) => {
    const downloadUrl = `https://invautomation.eo2cloud.com/api/v1/documents/${fileId}/download`;

    try {
      const response = await axios.get(downloadUrl, {
        responseType: "blob", // Set the response type to blob
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your token if needed
        },
      });

      // Create a blob URL for the downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); // You can set the name dynamically here
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link); // Clean up the DOM
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleSorting = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <>
      <div className="card list-area">
        <div className="flex">
          <h6 className="heading">{heading}</h6>
          <div className="right">
            <div className="total">
              <span>Total</span>
              <span>{tableData.totalElements}</span>
            </div>
            <select
              className="form-select"
              value={selectedMonth}
              onChange={handleChangeMonth}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
                fontSize: "16px",
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              <option key={"month"}>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="actions">
          <input
            type="search"
            className="form-control search"
            placeholder="Search"
          />
          {table && (
            <select name="document_status" className="form-select">
              <option>Document Status</option>
              <option value="Status 1">Status 1</option>
              <option value="Status 2">Status 2</option>
            </select>
          )}
          {table && (
            <select
              name="sort_by"
              className="form-select"
              onChange={handleSorting}
            >
              <option>Sort By</option>
              <option value="Ascending">Ascending</option>
              <option value="Decending">Decending</option>
            </select>
          )}
          <button className="btn btn-primary">
            <span>Search</span> <img src="/icons/search.svg" alt="" />
          </button>
          <button className="btn btn-primary" onClick={handleExportClick}>
            <span>Export File</span>
            <img src="/icons/export_file.svg" alt="" />
          </button>
          {table && (
            <button className="btn btn-primary">
              <span>Move To</span>
              <img src="/icons/move_to.svg" alt="" />
            </button>
          )}
          {/* <button className='btn btn-primary'><span>Create New</span><img src="/icons/create_new.svg" alt="" /></button> */}
          <Dropdown className="create-new">
            <Dropdown.Toggle variant="primary" id="create_new">
              <span>Create New</span>
              <img src="/icons/create_new.svg" alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/folder">Folder</Dropdown.Item>
              <Dropdown.Item href="#/link">Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="more">
            <Dropdown.Toggle variant="primary" id="more">
              <img src="/icons/more.svg" alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/delete">Delete</Dropdown.Item>
              <Dropdown.Item href="#/edit">Edit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {table && (
          <ListTable
            columnNames={tableColumns}
            data={tableData}
            selectedMonth={selectedMonth}
            sortBy={sortBy}
          />
        )}
        {folderList && <FolderList items={folderList} />}
        <TablePagination
          className="table-pagination"
          component="div"
          count={tableData.totalElements}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select File to Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <List>
            {tableData.content.map((file) => (
              <ListItem disablePadding key={file.id}>
                <ListItemButton
                  onClick={() => handleDownload(file.id, file.fileUnqName)}
                >
                  <ListItemIcon>
                    <FileDownload />
                  </ListItemIcon>
                  <ListItemText primary={file.fileUnqName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardList;
