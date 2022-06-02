import React from 'react';

const AuthContext = React.createContext({
  user: '',
  token:'',
  isLoggedIn: false,
  role:'',
  showCars: false,
  search:'',
  setAuth: (item) => {},
  setLogOut: () => {},
  setShowCars: () => {},
  // setRole: (value) => {},
  // setStatus: (value) => {},
  // setMessage: (value) => {},
  // setShowMessage: (value) => {},
  // setToken: (value) => {},
});

export default AuthContext;