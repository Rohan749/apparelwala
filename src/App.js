import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import BusinessType from "./Components/BusinessType/BusinessType";
import TopNavbar from "./Components/Home/TopNavigationBar/TopNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choose-your-business" element={<BusinessType/> } />
          <Route path="/choose-your-business/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
