import React, { useState } from "react";
import LibraryButton from "./LibraryButton";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //create account variables
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //display check
  const [doYouHaveAccount, setDoYouHaveAccount] = useState(true);

  function checkLogin() {
    alert("Username: " + userName + " and Password: " + password);
  }

  return (
    <>
      { doYouHaveAccount ? (
        <div style={{border:"3px solid blue", marginTop:"200px"}}>
          <h1>Sign In</h1>
          <h3>Access your academic portal</h3>
          <label>UserName:</label><input type="text" onChange={e=> setUserName(e.target.value)} placeholder="Please enter your user name" /><br/>
          <label>Password:</label><input type="password" onChange={e=> setPassword(e.target.value)}/><br/>
          <div>
            <LibraryButton buttonLabel="LOGIN" onClick={checkLogin}/> <br/>
            <label>New here?</label><LibraryButton buttonLabel="Create an Account" onClick={() => setDoYouHaveAccount(false)} />
          </div>
        </div>
      ) : (
        <div>
          <div style={{border:"3px solid indigo", marginTop:"200px"}}>
            <h1>Create an Account</h1>
            <h3>Access your academic portal</h3>
            <label>Student ID:</label><input type="text" onChange={e=> setUserName(e.target.value)} placeholder="Please enter your user name" /><br/>
            <label>email:</label><input type="text" onChange={e=> setEmail(e.target.value)}/><br/>
            <label>password:</label><input type="password" onChange={e=> setPassword(e.target.value)}/><br/>
            <label>confirm:</label><input type="password" onChange={e=> setConfirmPassword(e.target.value)}/><br/>
            <div>
              <LibraryButton buttonLabel="CREATE AN ACCOUNT"/> <br/>
              <label>Already have an account?</label><LibraryButton buttonLabel="sign In" onClick={() => setDoYouHaveAccount(true)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
