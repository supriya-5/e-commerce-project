import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
   
        const { loginWithRedirect } = useAuth0();
        const { logout, isAuthenticated } = useAuth0();

    return (
        <>
            
            {/* <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => loginWithRedirect()}>
               <span className="fa fa-sign-in me-1"></span> Login
            </button>
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => logout({ returnTo: window.location.origin })}>
               <span className="fa fa-sign-out me-1"></span> Logout
            </button> */}


            {isAuthenticated  ? (
                 <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => logout({ returnTo: window.location.origin })}>
                 <span className="fa fa-sign-out me-1"></span> Logout
              </button>
            ):
            (
                <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => loginWithRedirect()}>
                <span className="fa fa-sign-in me-1"></span> Login
             </button>   
            )}


            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
    */} 
                                    {/* <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={() => loginWithRedirect()}>Log In</button> */}
                      {/*</form>
                      
                      /</div>
                                </div>
                </div>
                        </div> */}
        </>
                    )
}

                    export default Login
