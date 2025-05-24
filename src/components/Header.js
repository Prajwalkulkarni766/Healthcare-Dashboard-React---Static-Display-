import { BiSolidBell } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidAddToQueue } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div>
      {/* <h1>Healthcare</h1>

      <BiSearch />
      <input type="text" />

      <BiSolidBell />
      <BiSolidUser />
      <BiSolidAddToQueue /> */}

      <header className="header">
        <div className="logo">Healthcare.</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." disabled />
        </div>
        <div className="header-icons">
          <button className="notification-icon">
            <span className="badge">3</span>
            <BiSolidBell />
          </button>
          <div className="user-profile">
            <BiSolidUser />
            <span>John Doe</span>
          </div>
          <BiSolidAddToQueue />
        </div>
      </header>

    </div>
  )
}

export default Header;