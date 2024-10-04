import Link from "next/link";
import { useRouter } from "next/router";
const AdminMenu = ({ label, path }) => {
  const router = useRouter();
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
