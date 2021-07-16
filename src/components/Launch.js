/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import model from './STATICS/model.png';
import './Launch.css';
import {Link} from 'react-router-dom';

const Launch = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="register">
            <button id="signIn"><Link to='/Login' style={{ color: '#ffffff', textDecoration: 'inherit'}}>Sign in</Link></button> &nbsp;&nbsp;&nbsp;
            <button id="signUp"><Link to='/Form' style={{ color: '#ffffff', textDecoration: 'inherit'}}>Join For Free</Link></button>
          </div>
          <div className="image">
            <img style={{ width: "100%"}} src= {model} alt='success-image'/>
          </div>
          <div className="logo">
            <h1>PM <span>Guide</span></h1>
          </div>
          <div className="description">
            <p>Be one of the early access members</p>
            <h1>Experience a new way to learn Product Management!</h1>
            <p>Personalise your own learning and save all favorite content in a single page</p>
            <button id="signUpNow"><Link to='/Form' style={{ color: '#ffffff', textDecoration: 'inherit'}}>SIGN UP NOW</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launch
