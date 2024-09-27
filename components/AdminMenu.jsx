import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AdminMenu = ({ label, path }) => {
  const router = useRouter();
  // const [crumbLabel, setCrumbLabel] = useState([]);
  // useEffect(() => {
  //   const storedCrumbs = JSON.parse(localStorage.getItem("breadcrumbs")) || [];
  //   setCrumbLabel(storedCrumbs);
  // }, []);

  // // Update breadcrumb state when a new label is provided
  // useEffect(() => {
  //   if (label) {
  //     setCrumbLabel((prevState) => {
  //       const newCrumbs = [...prevState, { label, path }];
  //       localStorage.setItem("breadcrumbs", JSON.stringify(newCrumbs)); // Store breadcrumbs in localStorage
  //       return newCrumbs;
  //     });
  //   }
  // }, []);

  // const resetBreadcrumbs = (index) => {
  //   const newCrumbs = crumbLabel.slice(0, index + 1);
  //   setCrumbLabel(newCrumbs);
  //   localStorage.setItem("breadcrumbs", JSON.stringify(newCrumbs)); // Update localStorage
  // };
  return (
    <>
      <div className="provider-menus">
        <Link
          href="/AdminDashboard"
          className={router?.pathname == "/AdminDashboard" ? "active" : ""}
        >
          {label}
        </Link>
      </div>
    </>
  );
};

export default AdminMenu;
