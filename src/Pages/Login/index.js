/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { signInWithPopup ,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Auth/firebase';
import GoogleButton from 'react-google-button';
import { Modal, Loading } from '../../Components';
import imgCar from '../../Assets/img/image 2.png';
import imgLogo from '../../Assets/img/Rectangle 62.png';
import '../../App.css';
import userService from '../../Services/userService';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
const authCtx = useAuth();
const { register, handleSubmit } = useForm();
const [showModal, setShowModal] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isMessage, setIsMessage] = useState('');
const navigate = useNavigate()
const authHandle = auth;
const provider = new GoogleAuthProvider();

const onSubmit = (value) =>{
    setIsLoading(true)
    userService.loginAdmin(value)
        .then((res) => {
            if(res?.access_token){
                authCtx.setAuth(res);
                setIsLoading(false);
                setIsMessage('Login Success')
                setShowModal(true)
                setTimeout(() => {
                    setShowModal(false)
                    setIsMessage('')
                    return navigate('/') 
                }, 1500);
            }else{
                setIsLoading(false);
                setIsMessage(res.message)
                console.log(res.message)
                setShowModal(true)
                setTimeout(() => {
                    setShowModal(false)
                    setIsMessage('')
                }, 1500);
            }
        })
}  

const handleGoggle = ()=>{
    signInWithPopup(authHandle ,provider).then((data)=>{
        if (data) {
            setIsLoading(true)
            userService.loginUser(data)
                .then((res) => {
                    if(res?.access_token){
                        authCtx.setAuth(res);
                        setIsLoading(false);
                        setIsMessage('Login Success')
                        setShowModal(true)
                        setTimeout(() => {
                            setShowModal(false)
                            setIsMessage('')
                            return navigate('/') 
                        }, 1500);
                    }else{
                        setIsLoading(false);
                        setIsMessage(res.message)
                        console.log(res.message)
                        setShowModal(true)
                        setTimeout(() => {
                            setShowModal(false)
                            setIsMessage('')
                        }, 1500);
                    }
                })
        }
    }).catch((err)=>{
        console.log(err , "ini adalah err")
    })
}


useEffect(() => {
    if (authCtx.isLoggedIn){
        return navigate('/')
    }
}, [])

return (
    <>
        {isLoading && <Loading />}
        {showModal && <Modal message={isMessage} />}
        <div className='grid grid-cols-2 full-body'>
            <div className='container'>
                <img className='w-full h-full' src={imgCar} alt='' />
            </div>
            <div className='container p-12' >
                <div className='flex flex-col justify-center h-full gap-2'>
                    <div>
                        <img className='w-75' src={imgLogo} alt='icon' />
                    </div>
                    <div className='font-bold text-lg'>Welcome Admin BCR</div>
                    <div className="flex flex-col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-md mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-grey-darker" 
                                id="email" 
                                type="text" 
                                placeholder="Email"
                                name='email'
                                required
                                {...register("email")}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-grey-darker text-md mb-2" htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="shadow appearance-none border border-red rounded w-full py-1 px-2 text-grey-darker mb-3" 
                                id="password" 
                                type="password" 
                                placeholder="Password" 
                                required
                                {...register("password")}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-between gap-5">
                        <button type='submit' className="bg-indigo-500 w-full hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                       
                        </div>
                    </form>
                    <div className='py-3'>
                        <GoogleButton
                            onClick={handleGoggle}
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login