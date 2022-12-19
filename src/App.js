import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
