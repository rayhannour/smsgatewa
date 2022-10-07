import React, { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

import { useHistory } from 'react-router-dom';
import { userLogin, fetchUserData } from '../ahthentificate/AuthenticationService';
import { authenticate, authFailure, authSuccess } from '../redux/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import axios from 'axios';
import { useKeycloak } from "@react-keycloak/web";
function LoginOriginal() {

    const { keycloak, initialized } = useKeycloak();

    const history = useHistory();
    const toast = useRef();
    const message = useRef();

    const showWarn = (msg) => {
        toast.current.show({ severity: 'warn', summary: 'Warn Message', detail: msg, life: 3000 });
    };
    const showError = (msg) => {
        toast.current.show({ severity: 'error', summary: 'Error Message', detail: msg, life: 3000 });
    };


    const [values, setValues] = useState({
        username: '',
        password: '',
        alias: '99',
        tcodgou: '01',
        tcodpr: '01'
    });



    const [data, setData] = useState({});
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //authenticate();
        authenticate();

        userLogin(values).then((response) => {

            console.log("response", response);
            if (response.status === 200) {
                //props.setUser(response.data);
                //setUser:(data)=> 
                authSuccess(response.data);

                /* fetchUserData().then((response) => {
                   setData(response.data);
                    console.log(JSON.stringify(response.data));
                    localStorage.setItem('userdata', JSON.stringify(response.data));
                    localStorage.setItem('isAuthenticated', true);
                    history.push('/');

                }).catch((e) => {
                    localStorage.clear();
                    showError("Error connected.");

                })*/
                setData(response.data);
                console.log(JSON.stringify(response.data));
                localStorage.setItem('userdata', JSON.stringify(response.data));
                localStorage.setItem('isAuthenticated', true);
                history.push('/');
            }
            else {
                authFailure('Something Wrong!Please Try Again');
                console.log('Something Wrong!Please Try Again');
                showError('Something Wrong!Please Try Again');
            }

        }).catch((err) => {

            if (err && err.response) {

                switch (err.response.status) {
                    case 401:
                        authFailure('Authentication Failed.Bad Credentials');
                        console.log("401 status");
                        console.log("Authentication Failed.Bad Credentials");
                        showWarn('Authentication Failed.Bad Credentials');
                        break;
                    default:
                        authFailure('Something Wrong!Please Try Again');
                        console.log('Something Wrong!Please Try Again');
                        showError('Something Wrong!Please Try Again');

                }

            }
            else {
                authFailure('Something Wrong!Please Try Again');
                console.log('Something Wrong!Please Try Again');
                showError('Something Wrong!Please Try Again');
            }




        });
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="login-body">
            <Toast ref={toast} />


            <Button
              color="inherit"
              onClick={() => {
                keycloak.login();
              }}
            >
              Login
            </Button>
            <div>
                <p>Status</p>
                <p>{` isAuthenticated: ${!!keycloak.authenticated}`}</p>
                <p>{` token: ${keycloak.token}`}</p>
                <p>{`initialized : ${initialized}`}</p>
                <p>{`authe : ${keycloak.authenticated}`}</p>
                <button
                  onClick={() => {
                    keycloak.login();
                  }}
                >
                  login
                </button>
                <button
                  onClick={() => {
                    keycloak.logout();
                  }}
                >
                  logout
                </button>
                <button
                  onClick={() => {
                    keycloak.register();
                  }}
                >
                  register
                </button>

                <div>{JSON.stringify(keycloak.idTokenParsed)}</div>
              </div>
            <div className="login-image">
                <img src={`assets/layout/images/pages/login-ondark.png`} alt="atlantis" />
            </div>
           
                <div className="login-panel p-fluid">
                    <div className="p-d-flex p-flex-column">
                    <form onSubmit={handleSubmit} noValidate={false} >
                        <div className="p-d-flex p-ai-center p-mb-6 logo-container">
                            <img src={`assets/layout/images/logo-light.png`} className="login-logo" alt="login-logo" />
                            <img src={`assets/layout/images/appname-dark.png`} className="login-appname" alt="login-appname" />
                        </div>
                        <div className="form-container">
                            <span className="p-input-icon-left">
                                <i className="pi pi-envelope"></i>
                                <InputText id="username" placeholder="Email" value={values.username} onChange={handleChange} name="username" required />
                            </span>
                            <span className="p-input-icon-left">
                                <i className="pi pi-key"></i>
                                

							<InputText  type="password"  id="password" placeholder="Password" value={values.password} onChange={handleChange} name="password" required />                                
                            </span>
                            <button type="button" className="p-d-flex p-link">Forgot your password?</button>
                        </div>
                        <div className="button-container">
                            <Button type="submit" label="Login"></Button>
                            <span>Don’t have an account?<button type="button" className="p-link" >Sign-up here</button></span>
                        </div>
                        </form>

                    </div>

                    <div className="login-footer p-d-flex p-ai-center">
                        <div className="p-d-flex p-ai-center login-footer-logo-container">
                            <img src="assets/layout/images/logo-gray.png" className="login-footer-logo" alt="login-footer-logo" />
                            <img src="assets/layout/images/appname-gray.png" className="login-footer-appname" alt="login-footer-appname" />
                        </div>
                        <span>Copyright 2021</span>
                    </div>
                </div>
            
        </div>
    )
}
export { LoginOriginal };