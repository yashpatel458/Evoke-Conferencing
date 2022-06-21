//Login.js contains the js for the login page of Link Up Chats

//Importing React 
import React from 'react';
//Importing Google and Facebook Icons
import { GoogleOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
import "firebase/app";
import logo from './logo1.png';
import bgimg from './signinbg.png';
//Imporing Auth Object from firebase
import { auth } from '../firebase';
import firebase from 'firebase/app';

//Function component
const Login = () => {
    return (
        <div id="login-page" style={{ backgroundImage: `url(${bgimg})` }}>

            <div id="login-card">
                <img className="logo" src={logo} alt='logo'/>
                <h2 className="welcome-msg">Let's Create Memories!</h2>
                
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                > 
                    <GoogleOutlined />  Sign in with Google
                </div>

                <br /> <br />

                <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined />  Sign in with Facebook
                </div>
            </div>
            {/* <p className="copyright">Made with ❤️‍🔥 by ItMakerz</p> */}
        </div>
    );
}

export default Login;