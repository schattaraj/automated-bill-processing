import { handleLogout } from "@/utils/logout";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CountryheadHeader = () => {
  const countries = [
    "All",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Ethiopia",
    "Rwanda",
  ];
  const router = useRouter();
  // console.log(router.pathname);

  return (
    <>
      <div className="admin-header">
        <div className="container">
          <div className="flex">
            <img src="/images/logo.png" alt="" className="logo" />
            <Dropdown className="collasped-icon">
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <Menu />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown className="country">
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    All
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {countries.map((country) => (
                      <Dropdown.Item key={country} href="#/action-1">
                        {country}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="profile">
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <img
                      src="/images/avatar.png"
                      alt=""
                      className="profile-image"
                    />
                    <div className="info">
                      <h6>Admin</h6>
                      <span>Admin.12@gmail.com</span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`${router.pathname}/Profile`}>
                      <img src="/icons/profile-actions/person.svg" alt="" />
                      <span>My Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Item href={`${router.pathname}/Settings`}>
                      <img src="/icons/profile-actions/settings.svg" alt="" />
                      <span>Setting</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="/Login">
                      <img src="/icons/profile-actions/logout.svg" alt="" />
                      <span>Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>

            <div className="actions">
              <Dropdown className="country">
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {countries.map((country) => (
                    <Dropdown.Item key={country} href="#/action-1">
                      {country}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="profile">
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <img
                    src="/images/avatar.png"
                    alt=""
                    className="profile-image"
                  />
                  <div className="info">
                    <h6>Admin</h6>
                    <span>Admin.12@gmail.com</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href={`${router.pathname}/Profile`}>
                    <img src="/icons/profile-actions/person.svg" alt="" />
                    <span>My Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item href={`${router.pathname}/Setting`}>
                    <img src="/icons/profile-actions/settings.svg" alt="" />
                    <span>Setting</span>
                  </Dropdown.Item>
                  <Dropdown.Item href={`#`} onClick={()=>{handleLogout(router)}}>
                    <img src="/icons/profile-actions/logout.svg" alt="" />
                    <span>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryheadHeader;
