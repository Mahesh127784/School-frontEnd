import { useState } from "react";
import "./App.css";
import Contactus from "./components/publicRoutes/Contactus";
import Footer from "./components/publicRoutes/Footer";
import Entrance from "./components/publicRoutes/Enterence.jsx";
import Login from "./components/publicRoutes/Login";
import Signup from "./components/publicRoutes/Signup";
import Navbar from "./components/publicRoutes/Navbar";
import AdmissionForm from "./components/publicRoutes/AdmissionForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from "./components/protectedRoutes/AdminPannel/home/Home.admin.jsx";
import NewStudent from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Student.new.jsx";
import NewTeacher from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Teacher.new.jsx";
import NewAdmin from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Admin.new.jsx";
import UpdateStudent from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Student.update.jsx";
import UpdateTeacher from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Teacher.update.jsx";
import UpdateAdmin from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Admin.update.jsx";
import StudentsHome from "./components/protectedRoutes/StudentsPannel/home/Home.students.jsx";
import TeachersHome from "./components/protectedRoutes/TeachersPannel/home/Home.teachers.jsx";
import UsersRoutsSecurity from "./components/protectedRoutes/usersRoutsSecurity.jsx";
import Academics from "./components/protectedRoutes/CommonPages/routerSecurity/usersRoutsSecurity.jsx";
import UserProfile from "./components/protectedRoutes/CommonPages/userprofile/UserProfile.jsx";
import Notifications from "./components/protectedRoutes/AdminPannel/notifications/Notifications.home.jsx";
import Help from "./components/protectedRoutes/CommonPages/help/Help.home.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logger, setLogger] = useState("Student");

  return (
    <>
      <Router>
        {isLoggedIn ? <div></div> : <Navbar setLogger={setLogger} />}
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/contactus" element={<Contactus />} />

          {/* logging routes */}
          <Route
            path="/login"
            element={<Login logger={logger} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup logger={logger} />} />

          {/* admission form route  */}
          <>
            <Route path="/AdmissionForm" element={<AdmissionForm />} />
          </>

          {/* protected admin routes */}
          <>
            <Route
              path="/adminHome"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={AdminHome}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/adminProfile"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UserProfile}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/newStudent"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewStudent}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/newTeacher"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewTeacher}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/newAdmin"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewAdmin}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/UpdateAdmin"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UpdateAdmin}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/UpdateTeacher"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UpdateTeacher}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/UpdateStudent"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UpdateStudent}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/academics"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={Academics}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/notifications"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={Notifications}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/help"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={Help}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </>

          {/* //protected students routs */}
          <>
            <Route
              path="/studentsHome"
              element={
                <UsersRoutsSecurity
                  Component={StudentsHome}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />
          </>

          {/* protected teachers routs  */}
          <>
            <Route
              path="/teachersHome"
              element={
                <UsersRoutsSecurity
                  Component={TeachersHome}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Teacher"}
                />
              }
            />
          </>
        </Routes>

        {isLoggedIn ? <div></div> : <Footer />}
      </Router>
    </>
  );
}

export default App;
