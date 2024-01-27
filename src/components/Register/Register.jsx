import React, { useRef, useState, useEffect } from "react";
import "../Login/login.css";
import axios from "../../axios";
import { NavLink } from "react-router-dom";
import './register.css';
import { useNavigate } from "react-router-dom";
function Register() {

    const [errmsg, setErrMsg] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address: '',

    })

    const navigate = useNavigate();

    const userRef = useRef();

    useEffect(() => {
      userRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name);
        // console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // console.log(formData);
    };
    async function handleSubmit(e) {
      e.preventDefault();
      // console.log(formData);
      try{
        const response = await axios.post('/register', formData);
        console.log('Data successfully submitted: ', response.data);
        navigate('/checkout');
      }
      catch(error){
        console.error('Error submitting data', error);
        if(error.response && error.response.status === 400){
          // console.log("hahahahahaahha");
          // console.log(error.response.data.error);
          setErrMsg(error.response.data.error);
          if (error.response.data.error === "Your account already exists. Please login") {
            navigate('/cart/login');  
          }
          // else if(error.response.data.error === "Email is already registered. Please use a different email"){
          
          // }

        }

      }
    } 

  return (
    <div className="login-form">
      <form method="POST" action="/register" onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              ref={userRef}
              value={formData.email}
              required
            ></input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              required
            ></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Complete Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            ref={userRef}
            value={formData.address}
            onChange={handleChange}
            name="address"
            placeholder="1234 Main St"
            required
          ></input>
        </div>


       
        <button type="submit" class="btn btn-primary">
          Signup
        </button>
          <p>{errmsg}</p>
        <p>Already have an account? <NavLink className="loginlink" to='/cart/login'>Click Here</NavLink></p>
      </form>
    </div>
  );
}

export default Register;
