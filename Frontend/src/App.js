import './App.css';
import Login from '../../client/src/Pages/Login';
import { Routes, Route } from "react-router-dom";
import Sign from '../../client/src/Pages/Sign';
import Todo from '../../client/src/Pages/Todo';
function App() {
  return (
  
   <>
   <Routes>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<Sign/>}/>

   </Routes>
 <Todo></Todo>
   </>
   
  );
}

export default App;
