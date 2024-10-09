import CountryheadHeader from "@/components/CountryheadHeader";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Footer from "@/components/Footer";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Profile = () => {
  return (
    <>
      <CountryheadHeader />
      <div className="profile">
        <div className="container">
          <CustomBreadcrumb />
          <div className="profile-base">
            <div className="avatar-card">
              <Image
                src={"/images/profile.png"}
                width={173}
                height={173}
                alt=""
              />
            </div>
            <div className="profile-content">
              <Typography variant="h4" color="#39409A">AGA Khan</Typography>
              <Typography>Doctor</Typography>
              <Typography>Admin12@gmail.com</Typography>
              <Typography>9864547852</Typography>
              <Link href="Setting">
              <Button variant="contained">Edit Profile</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
