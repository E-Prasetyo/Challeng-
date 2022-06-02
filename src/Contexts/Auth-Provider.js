import React, { useReducer } from 'react';
import AuthContext from './Auth-Context'

const defaultAuthState = {
    user: {},
    token:'',
    isLoggedIn: false,
    showCars:false,
    search:'',
    role:'',
}

const authReducers = (state, action) => {
    if(action.type === 'SETLOGOUT'){
        sessionStorage.removeItem('user')
        return{
            ...state,
            user: '',
            role: '',
            isLoggedIn: false,
            token: '',
        }
    }
    if(action.type === 'SETLOGIN'){
            sessionStorage.setItem('user', JSON.stringify(action.value))
            return{
                ...state,
                user: action.value?.email,
                role: action.value?.role,
                isLoggedIn: true,
                token: action.value?.access_token,
            }
    }
    if(action.type === "SETSHOWCARS"){
        return{
            ...state,
            showCars: true,
            search: action.value
        }
    }

}

export const AuthProvider = ({ children }) => {
    const [authState, dispatchAuthAction] = useReducer(authReducers, defaultAuthState);
    
    const setLogOutHandler = () => {
        dispatchAuthAction({type: "SETLOGOUT"});
    };

    const setLoginHandler = (value) =>{
        dispatchAuthAction({type: "SETLOGIN", value: value})
    }
    const setShowCarsHandler = (value) =>{
        dispatchAuthAction({type: "SETSHOWCARS", value: value})
    }

    const authContext = {
        user: authState.user,
        role: authState.role,
        showCars: authState.showCars,
        isLoggedIn: authState.isLoggedIn,
        token: authState.token,
        search: authState.search,
        setAuth: setLoginHandler,
        setLogOut: setLogOutHandler,
        setShowCars: setShowCarsHandler
    };

    return (
        <AuthContext.Provider value={authContext}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;