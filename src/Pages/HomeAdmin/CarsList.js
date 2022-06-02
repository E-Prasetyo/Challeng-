import React from 'react';
import Card from './CardCar';

const CarsList = (props) => {
    const { tab, data, failedLoad } = props;
    let content;
    if(data){
      if(tab === 'all'){
          content = (
            <div className='grid grid-cols-3 gap-4'>
              {data?.map((value) => {
                  return(
                    <div key={value?.id}
                      className="
                        bg-white
                        flex flex-column 
                        border border-black bg-white
                        p-2"
                      >
                      <Card item={value}/>
                    </div>
                  )
              })}
            </div>
          )
      }else{
        content = (
          <div className='grid grid-cols-3 gap-4'>
            {data?.filter((value)=> value.category === tab)?.map((value) => {
                return(
                  <div key={value?.id}
                    className="
                      bg-white
                      flex flex-column
                      border border-black
                      p-2"
                    >
                      <Card item={value}/>
                  </div>
                )
            })}
          </div>
        )
      }
    }else{
      content= 
        <div className="bg-white flex flex-column p-2 justify-center">
          {failedLoad}
        </div>
    }


  return (
    <>
        {content}
    </>
  )
}

export default CarsList