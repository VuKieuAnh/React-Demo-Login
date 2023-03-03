import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../../services/userServices";
import {Field, Form, Formik} from "formik";
import {createBlog} from "../../../services/BlogServices";

export default function AddBlog(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
    const handleCreate = (value) =>{
        let data = {... value, user: {
            id: user.id
        }}
        dispatch(createBlog(data))
        navigate('/home')
    }
    return(
        <>
            <div className={'row'}>
                <div className="offset-3 col-6">
                    <h1>Create Blog</h1>
                    <Formik initialValues={{title: '', content: ''}} onSubmit={values => {
                        handleCreate(values)
                    }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <Field type="text" classname={'form-control'} name={'title'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label" >Content</label>
                                <Field type="text" classname={'form-control'} name={'content'}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            | <button type="button" className="btn btn-info">
                            <Link to={'/register'}>Register</Link>
                        </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
