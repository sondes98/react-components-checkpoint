import './App.css';
import React from "react";
import ProfilePhoto from "./Component/Profil/ProfilePhoto";
import FullName from "./Component/Profil/FullName";
import Address from "./Component/Profil/Address";

function App() {
  return (
    <div className="App">
    <>
      <ProfilePhoto/>
    </>
    <>
      <FullName/>
    </>
    <>
      <Address/>
    </>
    </div>
  );
}
export default App;
