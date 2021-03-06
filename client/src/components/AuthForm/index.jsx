import React, { useState, useRef, useEffect } from 'react';
import Login from './Form/Login';
import Signup from './Form/Signup';
import FormToggler from './FormToggler/FormToggler';
import './index.scss';

export default function AuthForm({ handleLogin, handleSignup }) {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const togglerRef = useRef(null);

  const current = isLoginActive ? 'Sign Up' : 'Log In';

  const toggleForm = () => {
    if (isLoginActive) {
      togglerRef.current.classList.remove('right');
      togglerRef.current.classList.add('left');
    } else {
      togglerRef.current.classList.remove('left');
      togglerRef.current.classList.add('right');
    }
    setIsLoginActive(!isLoginActive);
  };

  useEffect(() => {
    togglerRef.current.classList.add('right');
  }, []);

  return (
    <div className="auth-from">
      <div className="auth-from__content">
        {isLoginActive ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <Signup handleSignup={handleSignup} />
        )}
      </div>
      <FormToggler current={current} ref={togglerRef} onClick={toggleForm} />
    </div>
  );
}
