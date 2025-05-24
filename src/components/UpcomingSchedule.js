import SimpleAppointmentCards from "./SimpleAppointmentCards";
import { appointmentDataOfSaturday, appointmentDataOfThursday } from "../data";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>

      <div className="schedule-day">
        <h3>On Thursday</h3>
        <SimpleAppointmentCards data={appointmentDataOfThursday} />
      </div>

      <div className="schedule-day">
        <h3>On Saturday</h3>
        <SimpleAppointmentCards data={appointmentDataOfSaturday} />
      </div>
    </div>

  )
}

export default UpcomingSchedule;