import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/organisms/navbar";


const Layout = () => {
  let classBg = 'bg-black'
  let classPosition = 'relative'
  const listBgTransparent = ['/', '/#/']
  const location = useLocation()
  const pathName = location.pathname
  if (listBgTransparent.includes(pathName)) {
    classBg = 'bg-transparent'
    classPosition = 'fixed'
  }

  return (
    <>
      <header className={"fixed z-20 w-screen p-7 "+classBg+" "+classPosition}>
        <Navbar />
      </header>
      <Outlet />
    </>
  )
}

export default Layout