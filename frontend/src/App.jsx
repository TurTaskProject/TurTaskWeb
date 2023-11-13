import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import TestAuth from "./components/testAuth";
import LoginPage from "./components/authentication/LoginPage";
import SignUpPage from "./components/authentication/SignUpPage";
import NavBar from "./components/navigations/Navbar";
import Home from "./components/Home";
import ProfileUpdate from "./components/ProfileUpdatePage";
import Calendar from "./components/calendar/calendar";
import KanbanBoard from "./components/kanbanBoard/kanbanBoard";
import IconSideNav from "./components/navigations/IconSideNav";
import Eisenhower from "./components/eisenhowerMatrix/Eisenhower";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const location = useLocation();
  const prevention = ["/login", "/signup"];
  const isLoginPageOrSignUpPage = prevention.some(_ => location.pathname.includes(_));

  return (
    <div className={isLoginPageOrSignUpPage ? "" : "display: flex"}>
      {!isLoginPageOrSignUpPage && <IconSideNav />}
      <div className={isLoginPageOrSignUpPage ? "" : "flex-1"}>
        <NavBar />
        <div className={isLoginPageOrSignUpPage ? "" : "flex items-center justify-center"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/tasks" element={<PrivateRoute />}>
              <Route exact path="/tasks" element={<KanbanBoard />} />
            </Route>
            <Route path="/testAuth" element={<TestAuth />} />
            <Route exact path="/update_profile" element={<PrivateRoute />}>
              <Route exact path="/update_profile" element={<ProfileUpdate />} />
            </Route>
            <Route exact path="/calendar" element={<PrivateRoute />}>
              <Route exact path="/calendar" element={<Calendar />} />
            </Route>
            <Route exact path="/priority" element={<PrivateRoute />}>
              <Route exact path="/priority" element={<Eisenhower />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
