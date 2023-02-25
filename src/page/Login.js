import {Link} from "react-router-dom";

export default function Login(){
    //15ph
    return(
        <>
            <div className={'row'}>
                <div className="offset-3 col-6">
                    <h1>Login form</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                    else.
                                </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                         | <button type="button" className="btn btn-info">
                            <Link to={'/register'}>Register</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
