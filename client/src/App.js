import Login from './Pages/Login';
import { Routes, Route } from "react-router-dom";
import Sign from './Pages/Sign';
import Todo from './Pages/Todo';
function App() {
  return (
  
   <>

   <Routes>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<Sign/>}/>
    <Route path={'/'} element={<Todo/>}/>

   </Routes>
   </>
   
  );
}

export default App;
