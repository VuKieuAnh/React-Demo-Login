import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/Register";
import Home from "./page/home/Home";
import ListBlog from "./page/home/blog/ListBlog";
import AddBlog from "./page/home/blog/AddBlog";

function App() {
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={'login'} element={<Login></Login>}></Route>
              <Route path={'register'} element={<Register></Register>}></Route>
              <Route path={'home'} element={<Home></Home>}>
                  <Route path={''} element={<ListBlog></ListBlog>}></Route>
                  <Route path={'create-blog'} element={<AddBlog></AddBlog>}></Route>
              </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
