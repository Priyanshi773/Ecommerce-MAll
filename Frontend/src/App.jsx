import {  Route , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/HomePage" element={<HomePage />} />
      


    </Routes>
    
  );
}

export default App;
