import {  Route , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";
import Dresses from "./Product/Dresses/Dresses";
import ZARA from "./Product/Dresses/ZARA";
import HM from "./Product/Dresses/HM";
import Food from "./Product/Food/Food";
import Dominos from "./Product/Food/Dominos";
import Burger from "./Product/Food/Burger";
import Game from "./Product/Game/Game";
import Arcade from "./Product/Game/Arcade";
import Vr from "./Product/Game/Vr";
import Cart from "./Product/Dresses/Cart";
import { CartProvider } from "./Product/Dresses/CartContext";
import Admin from "./pages/Admin";

function App() {
  return (
   
    <CartProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Homepage" element={<HomePage />} />
      <Route path="/Dresses" element={<Dresses/>} />
      <Route path="/ZARA" element={<ZARA/>} />
      <Route path="/HM" element={<HM/>} />
      <Route path="/Food" element={<Food/>} />
      <Route path="/Dominos" element={<Dominos/>} />
      <Route path="/burger" element={<Burger/>} />
      <Route path="/Game" element={<Game/>} />
      <Route path="/Arcade" element={<Arcade/>} />
      <Route path="/VR" element={<Vr/>} />
      <Route path="/Cart" element={<Cart/>} />

<Route path="/admin" element={<Admin/>}/>
  
    </Routes>
    </CartProvider>
    
  );
}

export default App;
