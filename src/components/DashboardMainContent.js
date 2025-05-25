import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import DashboardOverview from "./DashboardOverview";

function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-grid">
        <div className="grid-1">
          {/* <AnatomySection />*/}
          <DashboardOverview />
          <ActivityFeed /> 
        </div>
        <div className="grid-2">
          <CalendarView />
          <UpcomingSchedule />
        </div>

      </div>
    </div>

  )
}

export default DashboardMainContent;