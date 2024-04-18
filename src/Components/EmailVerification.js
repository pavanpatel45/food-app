import { useState } from "react";
import React from "react";
import "../CSS/LoginBox.css";
import arrow from '../Images/arrow-left.png'
import { Link } from "react-router-dom";

function EmailVerification() {
    const [otp, setOtp]=useState("");
    const handleOtpChange = (event) => {
        setOtp(event.target.value);
      };
    // console.log("Email verification : ",email);
  return (

    <div className="login-box">
      <h2 className=" font-extrabold text-2xl font-serif underline">
      Verify your Email
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="font-serif font-normal">
          
          </label>
          <input
            type="number"
            id="username"
            placeholder="OTP"
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
      </form>
      <div>
        {/* <Link to="/user/resetPassword"> */}
      <button
        type="submit"
        className={`font-serif text-xl mt-4 ${
          !otp ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!otp}
      >
        Submit
      </button>
      {/* </Link>*/}
      </div> 
      <div>
      {/* <Link to="/user/login"> */}
      <div
        className="mt-3 flex flex-row items-center"
        style={{
          color: "#2CAE66",
          fontFamily: "Roboto",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "14px",
        }}
      >
        <img src={arrow} alt="" />
        <p className="ml-2"> Back to Login</p>
      </div>
      {/* </Link> */}
      </div>
    </div>
  );
}

export default EmailVerification;
