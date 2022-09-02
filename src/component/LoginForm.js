import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  // if (user) {
  //   return (
  //     <div>
  //       <p>Registered User: {user.email}</p>
  //     </div>
  //   );
  // }

  return (
    <form
      onSubmit={() => logInWithEmailAndPassword(email, password)}
      className='row'
    >
      <div className='col-12'>
        <h3>Login Form</h3>
      </div>
      <div className='col-12'>
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
      </div>
      <div className='col'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <input type='submit' className='btn btn-primary' value='Submit' />
          <button
            type='button'
            onClick={signInWithGoogle}
            className='btn btn-success'
          >
            Google Sign In
          </button>
          <button
            type='button'
            onClick={signInWithFacebook}
            className='btn btn-info'
          >
            Facebook Sign in
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
