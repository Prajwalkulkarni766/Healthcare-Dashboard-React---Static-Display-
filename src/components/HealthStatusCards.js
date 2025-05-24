import { healthStatusCardData } from "../data";

function HealthStatusCard({ icon, bodyPartName, lastCheckDate, progressValue }) {
  return (
    <div className="status-card">
      <div className="status-card-body">
        <div className="status-icon">{icon}</div>
        <h3>{bodyPartName}</h3>
      </div>
      <span>Date: {lastCheckDate}</span>
      <progress value={progressValue} max="100"> 32% </progress>
    </div>
  )
}

function HealthStatusCards() {
  return (
    <>
      <div className="health-status-cards">
        {healthStatusCardData.map((data, index) => <HealthStatusCard
          key={index}
          icon={data.icon}
          bodyPartName={data.bodyPartName}
          lastCheckDate={data.lastCheckDate}
          progressValue={data.progressValue}
        />)}
      </div>
    </>
  )
}

export default HealthStatusCards;