import axios from "axios";

const userService = {

    async registerAdmin(value){
        const dataSend = {
          email: value?.email,
          password: value?.password,
          role: 'admin'
        }
        const data = await axios({
         method: 'post',
         url: process.env.REACT_APP_BASE_URL+'/admin/auth/register',
         data: dataSend
       })
       .then((response) => response)
       .catch((err) => err.response)
    
       return data
     },

    async registerUser(value){
        const dataSend ={
            email: value?.user?.email,
            password: value?.user?.uid,
        }
        const data = await axios({
         method: 'post',
         url: process.env.REACT_APP_BASE_URL+'/customer/auth/register',
         data: dataSend
       })
       .then((response) => response)
       .catch((err) => err.response)
    
       return data
     },

    async loginAdmin(value){
        const dataSend = {
            email: value?.email,
            password: value?.password,
        }
        const data = await axios({
         method: 'post',
         url: process.env.REACT_APP_BASE_URL+'/admin/auth/login',
         data: dataSend
       })
       .then((response) => response.data)
       .catch((err) => err.response.data)
    
       return data
     },

    async loginUser(value){
        const dataSend ={
            email: value?.user?.email,
            password: value?.user?.uid
        }
        const data = await axios({
         method: 'post',
         url: process.env.REACT_APP_BASE_URL+'/customer/auth/login',
         data: dataSend
       })
       .then((response) => response.data)
       .catch((err) => err.response.data)
    
       return data
     },

}

export default userService;