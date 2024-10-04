import { ExitToApp, Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Button, Form } from "react-bootstrap";

const TableActions = ({
  table,
  countries = [],
  documentStatus = [],
  isSortBy = false,
  isStatus = false,
  isExportFile = true,
}) => {
  return (
    <>
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
        {table && isStatus && (
          <Form.Select
            className="form-elements"
            aria-label="Select Country"
            style={{ paddingRight: "5rem" }}
          >
            <option disabled selected>
              Document Status
            </option>
            {documentStatus.map((country) => (
              <option key={country} href="#/action-1">
                {country}
              </option>
            ))}
          </Form.Select>
        )}
        {table && countries.length > 0 && (
          <Form.Select
            className="form-elements"
            aria-label="Select Country"
            style={{ paddingRight: "5rem" }}
          >
            <option disabled selected>
              Country
            </option>
            {countries.map((country, index) => (
              <option key={country.name + index} href="#/action-1">
                {country.name}
              </option>
            ))}
          </Form.Select>
        )}
        {table && isSortBy && (
          <Form.Select
            className="form-elements"
            aria-label="Select Country"
            style={{ paddingRight: "5rem" }}
          >
            <option disabled selected>
              Short By
            </option>
            <option>Ascending</option>
            <option>Decending</option>
          </Form.Select>
        )}

        <Button variant="primary" className="form-elements form-button">
          Search
        </Button>
        {isExportFile && (
          <Button variant="primary" className="form-elements form-button">
            Export File <ExitToApp />
          </Button>
        )}
      </div>
    </>
  );
};

export default TableActions;
