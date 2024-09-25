import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function ProviderMenu() {
  const router = useRouter();
  useEffect(()=>{
console.log("Route",router);
  },[])
  return (
    <>
    <div className="provider-menus">
      <Link href="/ProviderDashboard" className={router?.pathname == '/ProviderDashboard' ? 'active' : ''}>Dashboard</Link>
      <Link href="/DocumentList" className={router?.pathname == '/DocumentList' ? 'active' : ''}>Document List</Link>
      <Link href="/ClaimReported" className={router?.pathname == '/ClaimReported' ? 'active' : ''}>Claim Reported</Link>
      <Link href="/Folders" className={router?.pathname == '/Folders' ? 'active' : ''}>Folders</Link>
    </div>
    </>
  )
}
