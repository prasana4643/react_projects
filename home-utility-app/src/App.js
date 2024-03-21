import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import MainNavBar from "./Components/MainNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Timeline from "./Components/Pages/Timeline";
import Reminders from "./Components/Pages/Reminders";
import RepaymentForm from "./Components/Pages/RepaymentForm";
import DaySince from "./Components/Pages/DaySince";
import Events from "./Components/Pages/Events";
import RepaymentsTable from "./Components/Pages/RepaymentsTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <MainNavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/reminder" element={<Reminders />} />
          <Route path="/loanRepay" element={<RepaymentsTable />} />
          <Route path="/daySince" element={<DaySince />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
