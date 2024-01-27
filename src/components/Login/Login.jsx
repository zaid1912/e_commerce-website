import React, { useRef, useState, useEffect } from "react";
import './login.css';
import axios from '../../axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  // const [email, setEmail] = useState('');
  const passwordRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    console.log('Component re-rendered'); // Log when the component re-renders
    emailRef.current.focus();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  useEffect(() => {
    setErrMsg('');
  }, [errMsg]);


  // useEffect(() => {
  //   console.log('email data rerender')
  // }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(emailRef);
    if (name === 'email') {
      emailRef.current = value;
    } else if (name === 'password') {
      passwordRef.current = value;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('login', { email: emailRef.current, password: passwordRef.current });
      emailRef.current = ''; // Clearing the ref value
      passwordRef.current = ''; // Clearing the ref value
      errRef.current.style.display = 'none'; // Hide the error message
      navigate('/checkout');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrMsg(error.response.data.error);
        errRef.current.style.display = 'block'; // Show the error message
      }
    }
  }

  return (
    <div className="login-form">
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            ref={emailRef}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            ref={passwordRef}
            required
          />
        </div>
        <button className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
