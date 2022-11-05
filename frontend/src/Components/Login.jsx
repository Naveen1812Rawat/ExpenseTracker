import '../App.css'
import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [userRegistration, setuserRegistration] = useState({
        username: "",
        password: ""
    });

    const handleInput = (e)=>{
      const name = e.target.name;
      var value = e.target.value;
      setuserRegistration({...userRegistration, [name] : value});
      console.log(name, value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const {username, password } = userRegistration;

      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username, 
          password: password
        })
      });

      const data = await res.json();
      if(res.status != 201 || !data) {
        window.alert("Invalid Credentials");
        //console.log("Not Registered");
      }
      else{
        window.alert("Welcome User");
       // console.log("Registered");
        navigate("/dashboard")
      }
    }
  return (
    <>
        <form action='submit' className='registration'>
        <h1 className='heading' style={{textAlign: "center", fontWeight: "bold"}}>Login</h1>
        <div className='userData'>
            <label htmlFor='username'>Username</label>
            <input type="text" autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name="username" id='username'/>
        </div>

        <div className='userData'>
            <label htmlFor='password'>Password</label>
            <input type="password" autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name="password" id='password'/>
            <span style={{display: "flex"}}>
            <input type="checkbox" onChange={()=>{
               var x = document.getElementById("password");
               if (x.type === "password") {
                 x.type = "text";
               } else {
                 x.type = "password";
               }
            }} style={{width: "15px"}}/>
            <p style={{margin: "10px"}} id="Show-password">Show Password</p>
            </span>
        </div>
        <div className='userData'>
          <NavLink to="/dashboard"><button type='submit' onClick={handleSubmit}>Login</button></NavLink> 
          <p style={{ textAlign: "center"}}>
            Don't have an Account?  
            <NavLink to="/sign-up" style={{color: "white", fontWeight: "bold"}}>Register</NavLink>
          </p>  
        </div>
      </form>
    </>
  )
}

export default Login