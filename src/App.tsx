// import LoginPage from "./components/LoginPage"
// import LoginPage2 from "./components/LoginPage2";
// import RespLoginPage from "./components/RespLoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Login3";
import Dashboard1 from "./pages/Dashboard1";
// import Map from "./component/Map";
// import Lottie1 from "./components/Lottie1";
// import MusicGame from "./component2/MusicGame";
const App = () => {
  return (
    <>
    
   <BrowserRouter>
   <Routes>
   <Route path="/dashboard" element={<Dashboard1/>}/>
   <Route path="/" element={<Test/>}/>
   </Routes>
      {/* <LoginPage2 /> */}
      {/* <RespLoginPage/> */}
      {/* <LoginSignup/> */}
      
      {/* <LoginPage/> */}
      {/* <MusicGame/> */}
   </BrowserRouter>
    </>
  );
};
export default App;
