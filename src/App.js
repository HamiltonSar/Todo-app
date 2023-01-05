import React from "react";
import { ReactDOM } from "react";
import { Route, Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import CategoryDataContext from "./components/contextapis/categorydatacontext/categorydatacontext";
import PopUpContext from "./components/contextapis/popupcontext/popcontext";
import IndexComponent from "./components/indexcomponent/component/indexcomponent";
import Profile from "./components/profile/component/profile";
import Settings from "./components/setting/component/settings";



function App() {
  return (
    <>
      <PopUpContext>
        <CategoryDataContext>
          <IndexComponent />
        </CategoryDataContext>
      </PopUpContext>
      <Routes>
        <Route path = "/profile" element = { <Profile /> } />
        <Route path = "/setting" element = { <Settings /> } />
      </Routes>
    </>

  );
}

export default App;
