import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = () => {
    const [location,setLocation] = useState({});
    const [searchId, setSearchId] = useState(" ")

  useEffect(()=>{
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
    .then(res => setLocation(res.data));
  }, [])

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchId}/`)
      .then((res) => setLocation(res.data));
  };
 
    return (
        <div>
            <div className='input__change'>
                <input title="buscar" placeholder="type a location Id" type="search" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
                <button onClick={searchLocation}>Search</button>
            </div>  
                 
                <ul className="container__cards"> 
               
                {
                    location.residents?.map(resident =>(
                  <ResidentInfo resident={resident} key={resident}/>

                ))
                
                }
         
            </ul>
                           
            <div className='location__card'>
              <div>
                <h5 className='tittle__card'> Name</h5>
                <p className='text__card'> {location?.name}</p>
               </div>
              <div>
                <h5 className='tittle__card'> Type  </h5>
                <p className='text__card'>{location?.type}</p>
              </div>  
              <div>
                <h5 className='tittle__card'> Dimension  </h5>
                <p className='text__card'>{location?.dimension}</p>
              </div>   
              
              <div>
                <h5 className='tittle__card'> Population </h5>
                <p className='text__card'>{location?.residents?.length}</p>
              </div>   
             

            </div> 
          
            </div>
                
        
    );
};

export default Location;