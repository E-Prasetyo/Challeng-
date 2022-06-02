import axios from "axios";

const carsService = {

    async getAllCars(){
        const data = await axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL+'/admin/car',
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async getCarById(id){
        const data = await axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL+`/admin/car/${id}`,
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async AddNewCar(item){
        var FormData = require('form-data');
        var dataFormat = new FormData();
        dataFormat.append('name', item?.name);
        dataFormat.append('category', item?.category);
        dataFormat.append('price', item?.price);
        dataFormat.append('status', item?.status);
        dataFormat.append('image', item?.image);
        
        const data = await axios({
            method: 'post',
            url: process.env.REACT_APP_BASE_URL+'/admin/car',
            data: dataFormat
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    }
}

export default carsService;