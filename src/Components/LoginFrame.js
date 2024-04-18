import React from "react";
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import bg from '../Images/bg.png';
import '../CSS/LoginBox.css'; 
import { Link, Routes, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

export default function LoginFrame(){
  const [email, setEmail]= useState("");

  return (
    <div className="relative">
      <img src={bg} alt="icon" className="w-full" />


      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot" element={<ForgotPassword email={email} setEmail={setEmail}/>}/>
        </Routes>
      </div>
    </div>
  );
}
