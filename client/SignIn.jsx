import React from 'react';

const SignIn = ({ updateUser, updatePassword, getData, username, password }) => {
  return (
    <div id="loginForm">
      <h4><strong>Current Users Sign-in Here</strong></h4>
      <form
      id="loginForm_Form"
      onSubmit={(e) => {
        e.preventDefault();
        getData(username, password);
      }}
      >
        <label htmlFor="user">Username: </label>
        <input
          type="text"
          id="user"
          onChange={(e) => updateUser(e.target.value)}
        />
        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          id="pass"
          onChange={(e) => updatePassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
};

export default SignIn;
