/* eslint-disable no-unused-vars */
// import { useEffect } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const RequireAuth = ({ children }) => {
// const auth = useSelector((state) => state.auth)
const authCtx = useAuth();
const location = useLocation();

  return (
    authCtx.isLoggedIn
      ? children
      : <Navigate to="/register" state={{ from:location}} replace />
  );
};

export default RequireAuth;
