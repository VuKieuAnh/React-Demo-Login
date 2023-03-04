import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/Register";
import Home from "./page/home/Home";
import ListBlog from "./page/home/blog/ListBlog";
import AddBlog from "./page/home/blog/AddBlog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlog} from "./services/BlogServices";

function App() {
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={'login'} element={<Login></Login>}></Route>
              <Route path={'register'} element={<Register></Register>}></Route>
              {
                  user.username != null?
                  <Route path={'home'} element={<Home></Home>}>
                  <Route path={''} element={<ListBlog></ListBlog>}></Route>
                  <Route path={'create-blogs'} element={<AddBlog></AddBlog>}></Route>
                  </Route>
                  :
                      <Route path={'/login'} element={<Login></Login>}></Route>
              }




          </Routes>
      </div>
    </>
  );
}

export default App;
