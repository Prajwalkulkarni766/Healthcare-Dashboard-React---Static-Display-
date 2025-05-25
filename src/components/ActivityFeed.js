function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="head">
        <h2>Activity</h2>
        <p>3 Appointment on this week</p>
      </div>
      <div className="activity-stats">
        <div className="bar-chart">
          {[
            { day: "Mon", height: "60%" },
            { day: "Tues", height: "30%" },
            { day: "Wed", height: "45%" },
            { day: "Thurs", height: "75%" },
            { day: "Fri", height: "50%" },
            { day: "Sat", height: "90%" },
            { day: "Sun", height: "25%" },
          ].map(({ day, height }) => (
            <div key={day} className="bar-wrapper">
              <div className="bar" style={{ height }}></div>
              <div className="bar-label">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed;