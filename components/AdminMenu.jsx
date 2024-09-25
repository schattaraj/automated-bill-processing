import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AdminMenu = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, []);

  return (
    <>
      <div className="provider-menus">
        <Link
          href="/AdminDashboard"
          className={router?.pathname == "/AdminDashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
      </div>
    </>
  );
};

export default AdminMenu;
