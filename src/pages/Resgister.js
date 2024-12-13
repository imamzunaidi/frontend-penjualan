import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Register() {

    //define state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const history = useHistory();

    //function "registerHanlder"
    const registerHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        //send data to server
        await axios.post('http://localhost/backend-penjualan/public/api/register', formData)
        .then(() => {
            alert('berhasil melakukan registerasi !!')
            //redirect to logi page
            history.push('/');
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    };

    return (
 
        <div className='row'>
            <div className="col-md-4">

            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ marginTop: '110px' }}>
                <div className="login-box">
                    <div className="login-logo"> <a href="../index2.html"><b>Register</b> </a> </div> 
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Input data dengan benar</p>
                            <form onSubmit={registerHandler}>
                                <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
                                    <div className="input-group-text"> <span className="bi bi-person" /> </div>
                                </div>
                                {
                                    validation.email && (
                                        <div className="alert alert-danger">
                                            {validation.email[0]}
                                        </div>
                                    )
                                }
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
                                <div className="input-group mb-3"> <input type="password" className="form-control" placeholder="Password Konfirmasi Password"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                                    <div className="input-group-text"> <span className="bi bi-check2-square" /> </div>
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
                                        {/* <div className="form-check"> <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label> 
                                        </div> */}
                                    </div> 
                                    <div className="col-4">
                                        <div className="d-grid gap-2"> <button type="submit" className="btn btn-primary">Resgister Pelanggan</button> </div>
                                    </div> 
                                </div> 
                            </form>
                            
                            {/* <p className="mb-1"> <a href="forgot-password.html">I forgot my password</a> </p> */}
                            <p className="mb-0"> 
                                <Link to="/" className="text-center">
                                    Sudah Punya Akun? Login
                                </Link> 
                                {/* <a href="" className="text-center">
                                Sudah Punya Akun ? Login
                            </a>  */}
                            </p>
                        </div> 
                    </div>
                </div>  
                
            </div>
        </div>

    )
}
export default Register;