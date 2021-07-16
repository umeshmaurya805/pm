import React, {useState} from 'react';
import './App.css';
import Launch from './components/Launch';
import Form from './components/Form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FormSignup from './components/FormSignup';
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password:"admin123"
  }
  const [user,setUser] = useState({name: "", email: ""});
  const [error,setError] = useState("");
  const Login = details => {
    console.log(details);
    if(details.email===adminUser.email && details.password===adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match Sorry!");
    }
  }
  const Logout = () =>{
    console.log("Logout");
    setUser({name:"",email:""});
  }
  return (
    <Router>
        <Switch>
        <Route exact path="/">
          <Launch />
        </Route>
        <Route exact path="/Login">
          <div className="App">
            {
            (user.email!=="") ? (
              <div className="welcome">
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
              </div>):(<LoginForm Login={Login} error={error}/>)
            }
          </div>
        </Route> 
        <Route exact path="/SignUp">
          <FormSignup/>
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
