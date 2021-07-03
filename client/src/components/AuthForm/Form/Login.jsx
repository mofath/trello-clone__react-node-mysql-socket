import React from 'react';
import formBackground from '../../../assets/auth-form-bg.svg';
import './index.scss';

export default function Login() {
  return (
    <div className="auth-form__container">
      <div className="auth-form__header">Login</div>
      <div className="auth-form__bg">
        <img src={formBackground} alt="background-img" />
      </div>
      <form className="auth-form__form">
        <div className="auth-form__form__group">
          <label className="auth-form__form__label">Username</label>
          <input
            htmlFor="username"
            type="text"
            className="auth-form__form__input"
          />
        </div>
        <div className="auth-form__form__group">
          <label className="auth-form__form__label">Password</label>
          <input
            htmlFor="password"
            type="password"
            className="auth-form__form__input"
          />
        </div>
        <button type="button" className="auth-form__form__submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

