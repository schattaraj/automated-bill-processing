import Alerts from "@/components/Alerts";
import CountryheadHeader from "@/components/CountryheadHeader";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Footer from "@/components/Footer";
import Account from "@/components/Account";
import RecycleBin from "@/components/RecycleBin";
import SettingMenu from "@/components/SettingMenu";
import SiteContent from "@/components/SiteContent";
import SitePermission from "@/components/SitePermission";
import React, { useState } from "react";
const RenderComponent = ({ activeRoute }) => {
  switch (activeRoute) {
    case "Account":
      return <Account />;
    case "Alerts":
      return <Alerts />;
    case "SiteContent":
      return <SiteContent />;
    case "SitePermission":
      return <SitePermission />;
    case "RecycleBin":
      return <RecycleBin />;
    default:
      return <Account />;
  }
};
const Setting = () => {
  const [activeRoute, setActiveRoute] = useState("Account");
  return (
    <>
      <CountryheadHeader />
      <div className="setting">
        <div className="container">
          <CustomBreadcrumb />
          <div className="setting-base">
            <SettingMenu
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
            />
            <RenderComponent activeRoute={activeRoute} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Setting;
