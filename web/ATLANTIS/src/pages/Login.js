import React,{useEffect} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Login = (props) => {


	

	return (
		<div className="login-body">

			
			<div className="login-image">
				<img src={`assets/layout/images/pages/login-${props.colorScheme === 'light' ? 'ondark' : 'onlight'}.png`} alt="atlantis" />
			</div>
			<div className="login-panel p-fluid">
				<div className="p-d-flex p-flex-column">
					<div className="p-d-flex p-ai-center p-mb-6 logo-container">
						<img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="login-logo" alt="login-logo"/>
						<img src={`assets/layout/images/appname-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="login-appname" alt="login-appname"/>
					</div>
					<div className="form-container">
					
		
					</div>
					<div className="button-container">
						
     	
					
						
						<span>Don’t have an account?<button className="p-link" >Sign-up here</button></span>
					</div>
				</div>

				<div className="login-footer p-d-flex p-ai-center">
					<div className="p-d-flex p-ai-center login-footer-logo-container">
						<img src="assets/layout/images/logo-gray.png" className="login-footer-logo" alt="login-footer-logo" />
						<img src="assets/layout/images/appname-gray.png" className="login-footer-appname" alt="login-footer-appname" />
					</div>
					<span>Copyright 2021</span>
				</div>

				  
 

			</div>

			<div>

			
   
    </div>

		</div>
	)
}