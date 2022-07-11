import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ResidentInfo = ({resident}) => {
    const [residentInfo, setResindentInfo]= useState({})
    
   
    useEffect(()=>{
            axios.get(resident)
            .then(res => setResindentInfo(res.data));
           
      }, [])
      const getStatus = () => {
        
        if(residentInfo.status === "Dead"){
          return(
            <>
              <div className="circle" style={{background:"red"}}> </div> 
              <p>{residentInfo?.status}</p> 
             
            </>
         ) 
        }else if (residentInfo.status === "Alive"){
          return(
            <>
           <div className="circle" style={{background:"green"}}></div> 
           <p>{residentInfo?.status}</p> 
            </>
          )
        }else{
          return(
            <>
            <div className="circle" style={{background:"gray"}}></div> 
            <p>{residentInfo?.status}</p> 
              
            </>
          )
        }
    }

    return (
         
            <div className="card__resident"> 
                <img className="img__resident" src={residentInfo?.image} alt="" />
                <div className='status'>{getStatus()}</div>  
                <h3 className="resident__name"> {residentInfo?.name}</h3>
                <p className='clear'> spacie:</p>
                <p className='dark'>{residentInfo?.species}</p>
                <p className='clear'>origin: </p>
                <p className='dark'>{residentInfo?.origin?.name}</p>
                <p className='clear'>episodes where appear : </p>
                <p className='dark'>{residentInfo?.episode?.length}</p>
            </div>
        
    );
};

export default ResidentInfo;