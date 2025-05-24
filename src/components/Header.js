import { BiSolidBell } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidAddToQueue } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <span style={{ color: "#03c6fc" }}>Health</span>
          <span style={{ color: "#04004a" }}>care.</span>
        </div>

        <div className="middle-section">
          <div className="search-bar">
            <BiSearch size={24} />
            <input type="text" placeholder="Search..." />
          </div>

          <button className="notification-icon">
            <BiSolidBell size={24} />
          </button>
        </div>

        <div className="header-icons">
          <button className="notification-icon">
            <BiSolidUser size={24} />
          </button>
          <button className="notification-icon">
            <BiSolidAddToQueue size={24} />
          </button>
        </div>
      </header>

    </div>
  )
}

export default Header;