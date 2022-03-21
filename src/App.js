// /* eslint-disable */
import React from "react";

import Registraion from "./registration/Registration";
import AdminPanel from "./Admin";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"registration"} element={<Registraion />} />
        <Route exact path={"/"} element={<AdminPanel />} />
        <Route exact path={"admin"} element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
