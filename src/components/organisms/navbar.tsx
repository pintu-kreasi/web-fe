import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-5 text-white px-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/academy">Academy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}