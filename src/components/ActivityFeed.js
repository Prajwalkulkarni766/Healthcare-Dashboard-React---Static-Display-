function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <div className="activity-stats">
        <div className="bar-chart">
          <div className="bar" style={{ height: '60%' }}></div>
          <div className="bar" style={{ height: '30%' }}></div>
          <div className="bar" style={{ height: '45%' }}></div>
          <div className="bar" style={{ height: '75%' }}></div>
          <div className="bar" style={{ height: '50%' }}></div>
          <div className="bar" style={{ height: '90%' }}></div>
          <div className="bar" style={{ height: '25%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed;