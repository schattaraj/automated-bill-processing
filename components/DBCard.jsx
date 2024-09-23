import Link from "next/link";

export default function DBCard({title,description,img,link,hoverImage}) {
  return (
    <>
    <Link href={link} className="db-card">
        <div className="text">
            <h6>{title}</h6>
            <span>{description}</span>
        </div>
        {hoverImage && <img src={hoverImage} alt="" className="hoverImage"/>}
        <img src={img} alt="" />        
    </Link>
    </>
  )
}
