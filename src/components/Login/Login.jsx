import React, {useRef, useState, useEffect} from "react";
import './login.css';
import axios from '../../axios';

function Login() {
  const [formData, setFormData] = useState({
        email: '',
        password: '',

    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData);
    };
    async function handleSubmit(e) {
      e.preventDefault();
      try{
        const response = await axios.post('/login', formData);
        console.log('Data successfully submitted: ', response.data);
      }
      catch(error){
        console.error('Error submitting data', error);

      }
    } 
  return (
    <div className="login-form ">
      <form method="post" action="/login" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange}
          ></input>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
