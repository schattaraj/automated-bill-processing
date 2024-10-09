import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CountryheadMenu = ({label}) => {
  const router = useRouter();
  return (
    <div className="provider-menus">
      <Link
        href="/CountryheadDashboard"
        className={router?.pathname == "/CountryheadDashboard" ? "active" : ""}
      >
        {label}
      </Link>
    </div>
  );
};

export default CountryheadMenu;
