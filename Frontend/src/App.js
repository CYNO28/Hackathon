import './App.css';
import Login from './Pages/Login';
import { Routes, Route } from "react-router-dom";
import Sign from './Pages/Sign';
function App() {
  return (
  
   <>
   <Routes>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<Sign/>}/>

   </Routes>
 
   </>
   
  );
}

export default App;
