import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";
import SimpleAppointmentCards from "./SimpleAppointmentCards";
import { todaysSchedule } from "../data"

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div>
          <h2>October 2021</h2>
        </div>

        <div>
          <BiCaretLeft size={24} />
          <BiCaretRight size={24} />
        </div>
      </div>
      <table className="calendar-grid">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <tr className="appointment-times">
            <td>10:00</td>
            <td>08:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td>—</td>
            <td>12:00</td>
            <td>10:00</td>
          </tr>
          <tr className="appointment-times">
            <td>11:00</td>  
            <td><span className="active">09:00</span></td>
            <td>—</td>
            <td>13:00</td>
            <td>14:00</td>
            <td>14:00</td>
            <td>10:00</td>
          </tr>
          <tr className="appointment-times">
            <td>12:00</td>
            <td>10:00</td>
            <td>13:00</td>
            <td>—</td>
            <td>16:00</td>
            <td>15:00</td>
            <td>11:00</td>
          </tr>
        </tbody>
      </table>

      <SimpleAppointmentCards data={todaysSchedule} />
    </div>
  )
}

export default CalendarView;