import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import TeachersList from "./Components/TeachersList";
import StudentsList from "./Components/StudentsList";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import ContextComponent from "./Components/Subcomponent/ContextComponent";


function App() {
 
  return (
    <Router>
      <div id="wrapper">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<ContextComponent>
            <Dashboard />
            </ContextComponent>} />
          <Route path="/teacherslist" element={<ContextComponent>
            <TeachersList />
            </ContextComponent>} />
          <Route
            path="/studentslist"
            element={<ContextComponent>
              <StudentsList />
              </ContextComponent>} />

          <Route path="/addstudent" element={<AddStudent/>} />
          <Route path="/edit-student/:id" element={<AddStudent/>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;