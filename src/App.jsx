import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import Footer from "./layout/footer";
import Appbar from "./layout/appbar/Appbar";
import "./styles/app.css";
function App() {
  return (
    <div className="w-screen h-[100vh]">
      <div className="z-20 fixed w-full">
        <Appbar />
      </div>
      <div className="z-10 w-full">
        <img
          src="/src/assests/images/bg.png"
          className="w-full md:h-64 h-auto relative animate-bounce-slow"
          // style={{
          //   height: "250px",
          // }}
        />
      </div>

      {/* <Navbar /> */}

      <Routes>
        <Route
          path="/"
          element={
            <div className="z-10 fixed w-screen bottom-0 h-[100vh] md:h-[80vh]">
              <Home />
            </div>
          }
        />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
