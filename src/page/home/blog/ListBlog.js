import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../../services/BlogServices";
import {login} from "../../../services/userServices";

export default function ListBlog(){
    const dispatch = useDispatch();
    const blogs = useSelector(state =>{
        console.log(state)
        return state.blog.blogs;
    })

    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
    useEffect(()=>{
        dispatch(getBlog());
    }, [])
    // useEffect(()=>{
    //     dispatch(login({
    //         name: "KA",
    //         password: "123456"
    //     }));
    // }, [])

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">Title</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogs.map((item, index) =>{
                           if (item.user.name == user.name)
                               return (
                                   <tr>

                                       <td scope="row">{item.userId}</td>
                                       <td>{item.title}</td>
                                       <td>Sua</td>
                                       <td>Xoa</td>
                                   </tr>
                               )
                           else {
                               return (<></>)
                           }
                        }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
