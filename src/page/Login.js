import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../services/userServices";

export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (values)=>{
        dispatch(login(values));
        console.log(values)
        navigate('/home');
    }
    return(
        <>
            <div className={'row'}>
                <div className="offset-3 col-6">
                    <h1>Login form</h1>
                    <Formik initialValues={{name: '', password: ''}} onSubmit={values => {
                        handleLogin(values)
                    }}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <Field type="text" classname={'form-control'} name={'name'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                            <Field type="password" classname={'form-control'} name={'password'}/>
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
