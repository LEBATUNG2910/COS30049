import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./Register/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import NFTs from "./pages/NFTs";
import Token from "./pages/Token";
import { Web3Provider } from "./pages/Web3Context";
import HistoryPage from "./components/Loader/HistoryPage";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Web3Provider>
        <div className="bg-black">
          <Navbar />
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/NFTs" element={<NFTs />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home/Register" element={<Register />} />
            <Route path="/Signup/Register" element={<Register />} />
            <Route path="/Signup/Login" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Token" element={<Token />} />
            <Route path="/history" element={<HistoryPage />} />{" "}
            {/* Route for the history page */}
          </Routes>
        </div>
      </Web3Provider>
    </Router>
  );
}

export default App;
