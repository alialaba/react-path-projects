import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "School Meeting",
      day: "Jan 11th at 12pm",
      reminder: true
    },
    {
      id: 2,
      text: "Appointment with Doctor",
      day: "Jan 12th at 3pm",
      reminder: true
    },
    {
      id: 3,
      text: "School Meeting",
      day: "Jan 15th at 11am",
      reminder: false
    }
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
export default App