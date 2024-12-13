import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const history = useHistory();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost/backend-penjualan/public/api/login', formData)
        .then((response) => {

            //set token on localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user.id);

            //redirect to dashboard
            history.push('/dashboard');
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    };

    return (
        // <div className="container" style={{ marginTop: "120px" }}>
        //     <div className="row justify-content-center">
        //         <div className="col-md-4">
        //             <div className="card border-0 rounded shadow-sm">
        //                 <div className="card-body">
        //                     <h4 className="fw-bold">Login</h4>
        //                     <hr/>
        //                     {
        //                         validation.message && (
        //                             <div className="alert alert-danger">
        //                                 {validation.message}
        //                             </div>
        //                         )
        //                     }
        //                     <form onSubmit={loginHandler}>
        //                         <div className="mb-3">
        //                             <label className="form-label">Email</label>
        //                             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email"/>
        //                         </div>
        //                         {
        //                             validation.email && (
        //                                 <div className="alert alert-danger">
        //                                     {validation.email[0]}
        //                                 </div>
        //                             )
        //                         }
        //                         <div className="mb-3">
        //                             <label className="form-label">Passowrd</label>
        //                             <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
        //                         </div>
        //                         {
        //                             validation.password && (
        //                                 <div className="alert alert-danger">
        //                                     {validation.password[0]}
        //                                 </div>
        //                             )
        //                         }
        //                         <div className="d-grid gap-2">
        //                             <button type="submit" className="btn btn-primary">LOGIN</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='row'>
            <div className="col-md-4">

            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ marginTop: '110px' }}>
                <div className="login-box">
                    <div className="login-logo"> <a href="../index2.html"><b>Login</b> </a> </div> 
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={loginHandler}>
                                <div className="input-group mb-3"> <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="input-group-text"> <span className="bi bi-envelope" /> </div>
                                </div>
                                {
                                    validation.email && (
                                        <div className="alert alert-danger">
                                            {validation.email[0]}
                                        </div>
                                    )
                                }
                                <div className="input-group mb-3"> <input type="password" className="form-control" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="input-group-text"> <span className="bi bi-lock-fill" /> </div>
                                </div>
                                {
                                    validation.password && (
                                        <div className="alert alert-danger">
                                            {validation.password[0]}
                                        </div>
                                    )
                                } 
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-check"> <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label> </div>
                                    </div> 
                                    <div className="col-4">
                                        <div className="d-grid gap-2"> <button type="submit" className="btn btn-primary btn-block">Sign In</button> </div>
                                    </div> 
                                </div> 
                            </form>
                           
                            {/* <p className="mb-1"> <a href="forgot-password.html">I forgot my password</a> </p> */}
                            <p className="mb-0"> 
                                {/* <a href="register.html" className="text-center">
                                Register a new Pelanggan
                                </a> */}
                                <Link to="/register" className="text-center">
                                    Register a new Pelanggan
                                </Link> 
                            </p>
                        </div> 
                    </div>
                </div>  
                
            </div>
        </div>

    )

}

export default Login;