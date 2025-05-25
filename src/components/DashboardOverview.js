import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import { BiCaretDown } from "react-icons/bi";

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <div className="head">
        <h1>Dashboard</h1>
        <p>This week <BiCaretDown /></p>
      </div>
      <div className="anatomy-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  )
}

export default DashboardOverview;