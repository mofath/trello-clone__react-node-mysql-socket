import React from 'react';
import { AuthForm } from '../../components';
import services from '../../services';
import { useHistory } from 'react-router';
import './index.scss';

function LandingScreen() {
  const history = useHistory();

  const handleLogin = async (username, password) => {
    try {
      const data = await services().authService.login({ username, password });
      alert(data.message);
      history.replace('/home');
    } catch (err) {
      alert('Something went wrong');
      console.log(err);
    }
  };

  const handleSignup = async (username, password) => {
    try {
      const data = await services().authService.signup({ username, password });
      console.log(data);
    } catch (err) {
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
