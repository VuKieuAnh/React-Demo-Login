import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../../services/BlogServices";

export default function ListBlog(){
    const dispatch = useDispatch();
    const blogs = useSelector(state =>{
        console.log(state.blog.blogs)
        return state.blog.blogs;
    })

    useEffect(()=>{
        dispatch(getBlog());
    }, [])

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
                        {blogs.map(item =>(
                            <tr>
                                <td scope="row">{item.userId}</td>
                                <td>{item.title}</td>
                                <td>Sua</td>
                                <td>Xoa</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
