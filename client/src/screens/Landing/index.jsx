import React, { useEffect } from 'react';
import { AuthForm } from '../../components';
// import services from '../../services';
import { useActions } from '../../hooks/useAction';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import './index.scss';

function LandingScreen() {
  const history = useHistory();
  const { login, signup } = useActions();
  const authReducer = useSelector((state) => state.auth);
  const { isAuthenticated, isLoading } = authReducer;

  useEffect(() => {
    if (isAuthenticated && !isLoading) history.replace('/home');
  }, [isAuthenticated, history, isLoading]);

  const handleLogin = async (username, password) => {
    try {
      login({ username, password });
      alert(`Hello, ${username}`);
      history.replace('/home');
    } catch (err) {
      alert('Something went wrong');
      console.log(err);
    }
  };

  const handleSignup = async (username, password) => {
    try {
      signup({ username, password });
      alert(`Hello, ${username}! Account Created!`);
      history.replace('/home');
    } catch (err) {
      alert('Something went wrong');
      console.log(err);
    }
  };

  return (
    <div className="screen landing-screen">
      <AuthForm handleLogin={handleLogin} handleSignup={handleSignup} />
    </div>
  );
}

export default LandingScreen;
