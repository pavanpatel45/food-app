import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Bookmark from "./Components/Bookmark";
import DialogBox from "./Components/DialogBox";
import SearchBar from "./Components/SearchBar";
import "./index.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Test from "./Components/Test";
import Map from "./Components/Map";
import ContactUs from "./Components/ContactUs";
import LoginFrame from "./Components/LoginFrame";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import EmailVerification from "./Components/EmailVerification";
import ResetPassword from "./Components/ResetPassword";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route  path="/" element={<SearchBar/>} />
    //     <Route  path="/bookmark" element={<Bookmark/>} />
    //    </Routes>
    // </Router>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<LoginFrame />}>
            <Route path="resetPassword" element={<ResetPassword />} />
            <Route path="login" element={<ResetPassword />} />
            <Route path="forgot" element={<Login />} />
            <Route path="emailVerification" element={<EmailVerification />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <EmailVerification/> */}
    </>
  );
}

export default App;
