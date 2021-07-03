import React, { useState } from 'react';
import formBackground from '../../../assets/auth-form-bg.svg';
import './index.scss';

export default function Signup({ handleSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPasword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    handleSignup(username, password);
  };

  return (
    <div className="auth-form__container">
      <div className="auth-form__header">Sign Up</div>
      <div className="auth-form__bg">
        <img src={formBackground} alt="background-img" />
      </div>
      <form className="auth-form__form" onSubmit={submit}>
        <div className="auth-form__form__group">
          <label className="auth-form__form__label">Username</label>
          <input
            htmlFor="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-form__form__input"
          />
        </div>
        <div className="auth-form__form__group">
          <label className="auth-form__form__label">Password</label>
          <input
            htmlFor="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            className="auth-form__form__input"
          />
        </div>
        <input
          type="submit"
          className="auth-form__form__submit-btn"
          value="Sign Up"
        />
      </form>
    </div>
  );
}
