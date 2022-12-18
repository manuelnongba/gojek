import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Driver from "./components/Driver";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Landing from "./components/Landing";
import Merchant from "./components/Merchant";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Landing />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/driver" exact element={<Driver />}></Route>
          <Route path="/merchant" exact element={<Merchant />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
