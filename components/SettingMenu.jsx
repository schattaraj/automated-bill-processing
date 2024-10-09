import { Button } from "@mui/material";
import React from "react";

const SettingMenu = ({ activeRoute, setActiveRoute }) => {
  return (
    <>
      <div className="setting-menus">
        <Button
          className={activeRoute == "Account" ? "active" : "inactive"}
          onClick={() => setActiveRoute("Account")}
        >
          Account
        </Button>
        <Button
          className={activeRoute == "Alerts" ? "active" : "inactive"}
          onClick={() => setActiveRoute("Alerts")}
        >
          Alerts
        </Button>
        <Button
          className={activeRoute == "SiteContent" ? "active" : "inactive"}
          onClick={() => setActiveRoute("SiteContent")}
        >
          Site Content
        </Button>
        <Button
          className={activeRoute == "SitePermission" ? "active" : "inactive"}
          onClick={() => setActiveRoute("SitePermission")}
        >
          Site Permission
        </Button>
        <Button
          className={activeRoute == "RecycleBin" ? "active" : "inactive"}
          onClick={() => setActiveRoute("RecycleBin")}
        >
          Recycle Bin
        </Button>
      </div>
    </>
  );
};

export default SettingMenu;
