import React, {useState} from 'react'
// import Login from './Login';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleInput = (e)=>{
      const name = e.target.name;
      var value = e.target.value;
      setuserRegistration({...userRegistration, [name] : value});
      console.log(name, value);
    }

    const handleSubmit = async (e) =>{
      e.preventDefault();

      const {username, email, password, cpassword } = userRegistration;

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username, 
          email: email, 
          password: password, 
          cpassword: cpassword
        })
      });

      const data = await res.json();
      if(res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Not Registered");
      }
      else{
        window.alert("User Registered Successfully");
        console.log("Registered");

        navigate("/login")
      }

    }

  return (
    <>
      <form method='POST' className='registration'>
        <h3 className='heading'>Registeration Form</h3>
        <div className='userData'>
            <label htmlFor='username'>Username</label>
            <input type="text" autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name="username" id='username'/>
        </div>

        <div className='userData'>
            <label htmlFor='email'>E-mail</label>
            <input type="email" autoComplete='off'
            value={userRegistration.email}
            onChange={handleInput}
            name="email" id='email'/>
        </div>

        <div className='userData'>
            <label htmlFor='password'>Password</label>
            <input type="password" autoComplete='off' 
            value={userRegistration.password}
            onChange={handleInput}
            name="password" id='password'/>
            <label htmlFor='cpassword'>Confirm Password</label>
            <input type="password" autoComplete='off' 
            value={userRegistration.cpassword}
            onChange={handleInput}
            name="cpassword" id='cpassword'/>
        </div>
        <div className='userData'>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default UserRegister
