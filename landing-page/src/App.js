import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import TeamInfo from './components/TeamInfo';
import Projects from './components/Projects';
import Integrations from './components/Integrations';
import Contact from './components/Contact';
import Modules from './components/Modules';
import MoodlePage from './components/MoodlePage';
import CourseManagement from './components/CourseManagement';
import Gyan from './components/Gyan';
import TimeTable from './components/TimeTable';
import ProjectsPortal from './components/ProjectsPortal';
import CourseFeedback from './components/CourseFeedback';
import Buyandsell from './components/Buyandsell';
import HostelDashboard from './components/HostelDashboard';
import HostelComplaints from './components/HostelComplaints';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teaminfo" element={<TeamInfo />} /> 
          <Route path="/Projects" element={<Projects />} /> 
          <Route path="/Integrations" element={<Integrations />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/Modules" element={<Modules />} /> 
          <Route path="/moodle" element={<MoodlePage />} />
          <Route path="/course management" element={<CourseManagement />} />
          <Route path="/gyan" element={<Gyan />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/projects portal" element={<ProjectsPortal />} />
          <Route path="/course feedback" element={<CourseFeedback />} />
          <Route path="/buy and sell" element={<Buyandsell />} />
          <Route path="/hostel dashboard" element={<HostelDashboard />} />
          <Route path="/hostel complaints" element={<HostelComplaints />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
