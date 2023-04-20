import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AndroidIos from "./pages/MobileApps/index";
import UiUx from "./pages/UIUxDesign/index";
import Web from "./pages/WebPlataform/index";
import Management from "./pages/Management";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AndroidIos />} path="/apps/mobile" />
        <Route element={<UiUx />} path="/apps/uiux" />
        <Route element={<Web />} path="/software/web" />
        <Route element={<Management />} path="/software/management" />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
