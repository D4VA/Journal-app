import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={true}
        >
          Register
        </button>


        <Link to="/auth/register" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
