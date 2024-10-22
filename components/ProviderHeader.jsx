import { handleLogout } from "@/utils/logout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function ProviderHeader() {
  const [showActions, setShowActions] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null); // Reference to the menu
  const fileInputRef = useRef(null); // Reference to the file input

  const router = useRouter();
  const handleToggle = () => {
    if (showActions) {
      setShowActions(false);
    } else {
      setShowActions(true);
      setIsAnimating(true);
      // Remove the animation after a few seconds
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Duration of the animation
    }
  };
  const handleResize = () => {
    if (window.innerWidth < 992) {
      menuRef.current.style.overflow = "hidden";
    } else {
      menuRef.current.style.overflow = "";
    }
  };
  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Set up resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);

      // Prepare the form data
      const formData = new FormData();
      formData.append("file", file);

      // Retrieve the token from local storage
      const token = localStorage.getItem("token"); // Replace with actual key for the token

      try {
        // Send the file to the API
        const response = await axios.post(
          "https://invautomation.eo2cloud.com/api/v1/documents",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Set authorization header
              "Content-Type": "multipart/form-data", // Set content type
            },
          }
        );

        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="provider-header">
        <div className="container">
          <div className="flex">
            <img src="/images/logo.png" alt="" className="logo" />
            <button
              className={`toggle-button ${showActions ? "collapsed" : ""}`}
              onClick={handleToggle}
            ></button>
            <div
              className={`actions ${showActions ? "show" : ""}`}
              style={{
                height: showActions ? `${menuRef.current.scrollHeight}px` : "0",
                // overflow: 'hidden',
                transition: "height 0.3s ease", // Smooth transition
              }}
              ref={menuRef}
            >
              <Dropdown className="upload">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Upload Documents
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Folder</Dropdown.Item>
                  <Dropdown.Item onClick={handleFileClick}>File</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="profile">
                <Dropdown.Toggle variant="white" id="dropdown-basic2">
                  <img
                    src="/images/user.png"
                    alt=""
                    className="profile-image"
                  />
                  <div className="info">
                    <h6>AGA Khan</h6>
                    <span>Admin.12@gmail.com</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <img src="/icons/profile-actions/person.svg" alt="" />
                    <span>My Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <img src="/icons/profile-actions/settings.svg" alt="" />
                    <span>Setting</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => {
                      handleLogout(router);
                    }}
                  >
                    <img src="/icons/profile-actions/logout.svg" alt="" />
                    <span>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange} // Trigger when a file is selected
      />
    </>
  );
}

export default ProviderHeader;
