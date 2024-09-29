import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/navbar";


const Layout = () => {
  return (
    <>
      <header className="bg-transparent fixed z-20 w-screen">
        <Navbar />
      </header>
      <Outlet />
    </>
  )
}

export default Layout