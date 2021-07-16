/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import logo from './STATICS/NEW.png'
import {Link} from 'react-router-dom'
import './LoginForm.css';
function LoginForm({Login,error}){
    const [details,setDetails] = useState({name:"", email:"",password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    let rt = require("./STATICS/v4.png");
    let b1 = require("./STATICS/twit.png");
    let b2 = require("./STATICS/git.png");
    let b3 = require("./STATICS/link.png");
    let b4 = require("./STATICS/goog.png");
    return (
        <form onSubmit={submitHandler} className="pm-login">
            <div id="left">  
                <img src={logo} alt="" />
                <br /> <br />
                <p id="p1">
                    Crowdsourced PM learning platform and reader community.
                </p> <br /> <br /> <br />
                <p id="p2">
                    our platform will provide an easy and seamless way for users to create their own personalized playlist/reading list and track progress of the learning.
                </p>
                
               
            </div>
            <div id="right">
               
                {/* <div id="boxed1">
                </div>
                <div id="boxed2">
                </div>
                <div id="boxed3">
                </div>
                <div id="boxed4">
                </div> */}
                <p id="rtp1">Sign&nbsp;PM&nbsp;<div id="guide"> Guide!</div></p> <br />
                <p id='p3'>
                    Go inside the best PM social network!
                </p> <br />
                <div className="login-form">

                <div className="icons">
                    <img className="social-icons"  src={b4.default} alt="image not found" />
                    <img className="social-icons"  src={b1.default} alt="image not found" />
                    <img className="social-icons"  src={b3.default} alt="image not found" />
                    <img className="social-icons"  src={b2.default} alt="image not found" />
                </div> <br />
                <div className="form-inner">
                {(error !== "") ? (<div className="error">{error}</div>):""}
                <div className="form-group">
                    <label htmlFor="email" className="p4">Email: </label> <br />
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div> <br />
                <div className="form-group">
                    <label htmlFor="password" className="p5">Password:</label><br />
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
            </div> <br />
            <div className="forgot">
            <div style={{display:'flex'}}>
                <img id="rig" src={rt.default} alt="image not found" /> &nbsp;
            <p id="rem">Remember Me</p>
            </div>
            <p id="forget">Forget my ID/Password</p>
            </div> <br />
            <input id="butt" style={{color:"white"}} type="submit" value="Sign In" /> <br />
            {/* <p id="button">Sign In</p> */}
            <p id="cont">
                <div>I Don’t have an account?&nbsp;</div>
               <Link to="/SignUp">
                    <div className="diff">Sign up</div>
                   </Link>
            </p>
            </div>

            </div>
        </form>
    )
}
export default LoginForm;