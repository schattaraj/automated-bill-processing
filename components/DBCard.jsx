import { Box } from "@mui/material";
import Link from "next/link";

export default function DBCard({
  title,
  description,
  img,
  link,
  hoverImage,
  elementAsLink = true,
}) {
  return elementAsLink ? (
    <>
      <Link href={link} className="db-card">
        <div className="text">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>
        {hoverImage && <img src={hoverImage} alt="" className="hoverImage" />}
        <img src={img} alt="" />
      </Link>
    </>
  ) : (
    <>
      <Box className="db-card">
        <div className="text">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>
        {hoverImage && <img src={hoverImage} alt="" className="hoverImage" />}
        <img src={img} alt="" />
      </Box>
    </>
  );
}
