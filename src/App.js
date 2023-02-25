import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/Register";

function App() {
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={'login'} element={<Login></Login>}></Route>
              <Route path={'register'} element={<Register></Register>}></Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
