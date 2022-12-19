import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import Products from "./Products";
import Driver from "./Driver";
import Merchant from "./Merchant";
import Careers from "./Careers";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/products" exact element={<Products />}></Route>
        <Route path="/driver" exact element={<Driver />}></Route>
        <Route path="/merchant" exact element={<Merchant />}></Route>
        <Route path="/employee" exact element={<Careers />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
