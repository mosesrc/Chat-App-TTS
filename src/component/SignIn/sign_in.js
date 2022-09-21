import React from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../firebase";

function SignIn({ email, password, setEmail, setPassword, name, setName }) {
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await registerWithEmailAndPassword(name, email, password);
    await navigate("/home", { state: { displayName: name, userEmail: email } });
  };

  return (
    <form onSubmit={handleSubmit} className='row' id='form2'>
      <div className='col-12'>
        <h3>Register</h3>
      </div>
      <div className='col-12'>
        <div className='mb-3'>
          <label htmlFor='exampleInputText' className='form-label'>
            Please Enter Your Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputText'
            aria-describedby='Name'
            placeholder='Enter name'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='emailAddress' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
            id='emailAddress'
            placeholder='Email Address: name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='userPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
            id='userPassword'
            placeholder='Enter password'
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Register'
          form='form2'
        />
      </div>
    </form>
  );
}

export default SignIn;
