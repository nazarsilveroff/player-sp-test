import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UseAuth from "./useAuth";

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  if(!code) return <Login/>

  const accessToken = UseAuth(code)
  return <Dashboard accessToken={accessToken}/>
}

export default App;
