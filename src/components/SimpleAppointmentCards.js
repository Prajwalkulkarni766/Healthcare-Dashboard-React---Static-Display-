function SimpleAppointmentCard({ icon, title, time, drName, isActive }) {
  return (
    <div className={`appointment-card ${isActive && "active"}`}>
      <div className="head">
        <h3>{title}</h3>
        <span>{icon}</span>
      </div>
      <p>{time}</p>
      <p>{drName}</p>
    </div>
  );
};

function SimpleAppointmentCards({ data }) {
  return (
    <div className="appointment-cards">
      {data.map((item, index) => <SimpleAppointmentCard
        key={index}
        icon={item.icon}
        title={item.title}
        time={item.time}
        drName={item.drName}
        isActive={item.isActive}
      />)}
    </div>
  );
};

export default SimpleAppointmentCards;