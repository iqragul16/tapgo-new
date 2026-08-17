import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Kiosk from "./pages/Kiosk";
import Contact from "./pages/Contact";


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  return (
     <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;