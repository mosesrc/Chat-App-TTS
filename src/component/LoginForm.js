import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase";
import SignIn from "./SignIn/sign_in";

function LoginForm({ email, password, setEmail, setPassword, name, setName }) {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      const { displayName, email: userEmail } = user;
      navigate("/home", { state: { displayName, userEmail } });
    }
  });

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

  return (
    <>
      <form
        onSubmit={() => logInWithEmailAndPassword(email, password)}
        className='row'
        id='form1'
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
            <input
              type='submit'
              className='btn btn-primary'
              value='Submit'
              form='form1'
            />
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
      <br />
      <h4>OR</h4>
      <br />
      <SignIn
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        name={name}
        setName={setName}
      />
    </>
  );
}

export default LoginForm;
