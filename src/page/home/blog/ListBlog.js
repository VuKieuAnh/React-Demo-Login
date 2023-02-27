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
                    {blogs.map(item =>(
                        <p>{item.title}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
