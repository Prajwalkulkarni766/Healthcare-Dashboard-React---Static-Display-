import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <DashboardOverview />
      <div className="dashboard-grid">
        <AnatomySection />
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>

  )
}

export default DashboardMainContent;