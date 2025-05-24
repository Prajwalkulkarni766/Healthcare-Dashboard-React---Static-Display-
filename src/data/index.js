const healthStatusCardData = [
  {
    icon: "🫁",
    bodyPartName: "Lungs",
    lastCheckDate: "15 Oct 2021",
    progressValue: 70
  },
  {
    icon: "🦷",
    bodyPartName: "Teeth",
    lastCheckDate: "10 Sep 2021",
    progressValue: 70
  },
  {
    icon: "🦴",
    bodyPartName: "Bone",
    lastCheckDate: "26 Oct 2021",
    progressValue: 70
  },
];

const todaysSchedule = [
  {
    icon: "🦷",
    title: "Dentist",
    time: "10:00 AM",
    drName: "Dr. Cameron willsone",
    isActive: true,
  },
  {
    icon: "💪",
    title: "Physiotherapy Appointment",
    time: "11:00 AM",
    drName: "Dr. Kevin Djones",
    isActive: false,
  }
]

const appointmentDataOfThursday = [
  {
    icon: "💉",
    title: "Health checkup complete",
    time: "11:00 AM",
    drName: " ",
    isActive: false,
  },
  {
    icon: "👁️",
    title: "Ophthalmologist",
    time: "14:00 PM",
    drName: " ",
    isActive: false,
  }
]

const appointmentDataOfSaturday = [
  {
    icon: "❤️",
    title: "Cardiologist",
    time: "12:00 AM",
    drName: " ",
    isActive: false,
  },
  {
    icon: "👨‍⚕️",
    title: "Neurologist",
    time: "16:00 PM",
    drName: " ",
    isActive: false,
  }
]

export {
  healthStatusCardData,
  todaysSchedule,
  appointmentDataOfThursday,
  appointmentDataOfSaturday
}