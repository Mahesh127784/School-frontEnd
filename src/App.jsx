import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contactus from "./components/publicRoutes/Contactus";
import Footer from "./components/publicRoutes/Footer";
import Entrance from "./components/publicRoutes/Enterence.jsx";
import Login from "./components/publicRoutes/Login";
import Signup from "./components/publicRoutes/Signup";
import Navbar from "./components/publicRoutes/Navbar";
import AdmissionForm from "./components/publicRoutes/AdmissionForm.jsx";

import UsersRoutsSecurity from "./components/protectedRoutes/CommonPages/routerSecurity/usersRoutsSecurity.jsx";

import AdminHome from "./components/protectedRoutes/AdminPannel/home/Home.admin.jsx";
import AdminProfile from "./components/protectedRoutes/AdminPannel/adminProfile/AdminProfile.jsx";
import Notifications from "./components/protectedRoutes/AdminPannel/notifications/Notifications.home.jsx";
import NewStudent from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Student.new.jsx";
import NewTeacher from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Teacher.new.jsx";
import NewAdmin from "./components/protectedRoutes/AdminPannel/home/newMembersEntryForm/Admin.new.jsx";
import UpdateStudent from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Student.update.jsx";
import UpdateTeacher from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Teacher.update.jsx";
import UpdateAdmin from "./components/protectedRoutes/AdminPannel/home/updatemembresData/Admin.update.jsx";
import AdminHelp from "./components/protectedRoutes/AdminPannel/help/Help.jsx";
import "react-toastify/dist/ReactToastify.css";
import Academics from "./components/protectedRoutes/AdminPannel/academics/Academics.home.jsx";

import TeachersHome from "./components/protectedRoutes/TeachersPannel/home/Home.teachers.jsx";
import TeachersClasses from "./components/protectedRoutes/TeachersPannel/classes/Classes.jsx";
import TeacherHelp from "./components/protectedRoutes/TeachersPannel/help/Help.jsx";

import Profile from "./components/protectedRoutes/CommonPages/teacherAndStudent/profile/UserProfile.jsx";

import StudentsHome from "./components/protectedRoutes/StudentsPannel/home/Home.students.jsx";
import StudentClasses from "./components/protectedRoutes/StudentsPannel/classes/Classes.jsx";
import StudentHelp from "./components/protectedRoutes/StudentsPannel/help/Help.jsx";
import UserNotifications from "./components/protectedRoutes/CommonPages/teacherAndStudent/notifications/Notifications.jsx";
import TeacherNotifications from "./components/protectedRoutes/TeachersPannel/notifications/Notifications.jsx";
import StudentNotifications from "./components/protectedRoutes/StudentsPannel/notifications/Notifications.jsx";

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
            <Route path="/admissionform" element={<AdmissionForm />} />
          </>
          {/* protected admin routes */}
          <>
            <Route
              path="/adminhome"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={AdminHome}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/adminprofile"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={AdminProfile}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />

            <Route
              path="/newstudent"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewStudent}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/newteacher"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewTeacher}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/newadmin"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={NewAdmin}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/updateadmin"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UpdateAdmin}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/updateteacher"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={UpdateTeacher}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/updatestudent"
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
              path="/adminhelp"
              element={
                <UsersRoutsSecurity
                  userRole={"Admin"}
                  Component={AdminHelp}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </>
          {/* //protected students routs */}
          <>
            <Route
              path="/studenthome"
              element={
                <UsersRoutsSecurity
                  Component={StudentsHome}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />
            <Route
              path="/studentclasses"
              element={
                <UsersRoutsSecurity
                  Component={StudentClasses}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />
            <Route
              path="/studenthelp"
              element={
                <UsersRoutsSecurity
                  Component={StudentHelp}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />{" "}
            <Route
              path="/studentprofile"
              element={
                <UsersRoutsSecurity
                  Component={Profile}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />
            <Route
              path="/studentnotifications"
              element={
                <UsersRoutsSecurity
                  Component={StudentNotifications}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Student"}
                />
              }
            />
          </>
          {/* protected teachers routs  */}
          <>
            <Route
              path="/teacherhome"
              element={
                <UsersRoutsSecurity
                  Component={TeachersHome}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Teacher"}
                />
              }
            />
            <Route
              path="/teacherhelp"
              element={
                <UsersRoutsSecurity
                  Component={TeacherHelp}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Teacher"}
                />
              }
            />

            <Route
              path="/techersClasses"
              element={
                <UsersRoutsSecurity
                  Component={TeachersClasses}
                  setIsLoggedIn={setIsLoggedIn}
                  userRole={"Teacher"}
                />
              }
            />
          </>
          <Route
            path="/teachernotifications"
            element={
              <UsersRoutsSecurity
                Component={TeacherNotifications}
                setIsLoggedIn={setIsLoggedIn}
                userRole={"Teacher"}
              />
            }
          />
          <Route
            path="/teacherprofile"
            element={
              <UsersRoutsSecurity
                Component={Profile}
                setIsLoggedIn={setIsLoggedIn}
                userRole={"Teacher"}
              />
            }
          />
        </Routes>
        {isLoggedIn ? <div></div> : <Footer />}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
