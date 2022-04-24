import React from 'react'
import { Link } from "react-router-dom";


const Signup = () => {
  return (
<>
<div className="form_section py-5 mt-5">
        <div className="container">
            <div className="row align-self-center">
                <div className="col-lg-8 col-10 mx-auto">
                  <div className="form_wrap">
                    <h2 className="text-center mb-5">Registration<span> Form</span></h2>
                    <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input type="text" className="form-control" name="name" placeholder="Name *"/>                   
                        </div>
                        <div className="mb-3">
                          <input type="email" className="form-control" name="email" placeholder="name@example.com *"/>
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control" name="password" placeholder="Password *"/>
                        </div>                    
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input type="phone" className="form-control" name="phone" placeholder="Your Phone *"/>
                        </div>                        
                        <div className="mb-3">
                          <input type="text" className="form-control" name="work" placeholder="Work *"/>                   
                        </div>                  
                        <div className="mb-3">
                          <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password"/>
                        </div>
                      </div>
                    </div>
                    <div className="m-5 text-center">
                      <button type="submit" className="btn btn-primary">Sign Up</button>
                   <p>or</p><Link to="/login">Login</Link>
                    </div>
                  </form>
    
                  </div>
                </div>
              
            </div>
        </div>
    </div>  
</>
  )
}

export default Signup