import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
    return (
        <>
           <div className="row">
               <div className="col-12">
                   <nav className="navbar navbar-expand-lg bg-light">
                       <div className="container-fluid">
                           <Link className="navbar-brand" to={'/home'}>Logo</Link>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                   aria-expanded="false" aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                       <Link className="nav-link active" aria-current="page" to={'/home/create-blogs'}>CreateBlog</Link>
                                   </li>
                                   {/*<li className="nav-item">*/}
                                   {/*    <a className="nav-link" href="#">Link</a>*/}
                                   {/*</li>*/}
                                   {/*<li className="nav-item dropdown">*/}
                                   {/*    <a className="nav-link dropdown-toggle" href="#" role="button"*/}
                                   {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                                   {/*        Dropdown*/}
                                   {/*    </a>*/}
                                   {/*    <ul className="dropdown-menu">*/}
                                   {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                                   {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                                   {/*        <li>*/}
                                   {/*            <hr className="dropdown-divider"/>*/}
                                   {/*        </li>*/}
                                   {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                                   {/*    </ul>*/}
                                   {/*</li>*/}
                                   {/*<li className="nav-item">*/}
                                   {/*    <a className="nav-link disabled">Disabled</a>*/}
                                   {/*</li>*/}
                               </ul>
                               <form className="form-inline my-2 my-lg-0">
                                   {/*<input classNsame="form-control mr-sm-2" type="search" placeholder="Search"*/}
                                   {/*       aria-label="Search"/>*/}
                                   {user.username}
                                   {/*<Link to={'/login'}>*/}
                                       <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>{
                                           localStorage.removeItem("user")
                                           navigate('/home')
                                       }}>Logout
                                       </button>
                                   {/*</Link>*/}

                               </form>
                           </div>
                       </div>
                   </nav>
               </div>
           </div>
        </>
)
}
