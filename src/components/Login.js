import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="form_section py-5 mt-5">
    <div className="container">
        <div className="row align-self-center">
            <div className="col-lg-8 col-10 mx-auto">
                <div className="form_wrap">
                    <h2 className="text-center mb-5">Registration<span> Form</span></h2>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="name@example.com *"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password *"/>
                        </div>
                        <div className="m-5 text-center">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            <p>or</p><Link to="/signup">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Login