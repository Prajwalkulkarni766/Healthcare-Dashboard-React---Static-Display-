// general icons
import { BiSolidDashboard } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { BiStats } from "react-icons/bi";

// tools icons
import { BiChat } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiCog } from "react-icons/bi";

function NavigationTile({ icon: Icon, text, isActive }) {
  return (
    <li className={isActive ? "active" : "not-active"}>
      <Icon size={20} style={{ marginRight: "8px" }} />
      {text}
    </li>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <h3 className="sidebar-title">General</h3>
      <ul className="sidebar-menu">
        <NavigationTile icon={BiSolidDashboard} text="Dashboard" isActive />
        <NavigationTile icon={BiHistory} text="History" />
        <NavigationTile icon={BiSolidCalendar} text="Calendar" />
        <NavigationTile icon={BiAddToQueue} text="Appointments" />
        <NavigationTile icon={BiStats} text="Statistics" />
      </ul>

      &nbsp;
      &nbsp;
      &nbsp;

      <h3 className="sidebar-title">Tools</h3>
      <ul className="sidebar-menu">
        <NavigationTile icon={BiChat} text="Chat" />
        <NavigationTile icon={BiPhoneCall} text="Support" />
        <NavigationTile icon={BiCog} text="Setting" />
      </ul>
    </nav>
  );
}


export default Sidebar;