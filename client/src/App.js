import AppNavbar from "./components/AppNavbar";
import DayEntry from "./components/DayEntry";
import Calendar from "./components/Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Calendar />
    </div>
  );
}

export default App;
