import React, { useRef, useState } from "react";
import "../Login/login.css";
import axios from "../../axios";

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address: '',

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
        const response = await axios.post('/register', formData);
        console.log('Data successfully submitted: ', response.data);
      }
      catch(error){
        console.error('Error submitting data', error);

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
            onChange={handleChange}
            name="address"
            placeholder="1234 Main St"
            required
          ></input>
        </div>
       
        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
