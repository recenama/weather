import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY="API_KEY";

const App = ()=> {
  const [data,setData]= useState({});
  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Riobamba&appid=${API_KEY}`).then(res=>{
      setData(res);
    })
  },[])
  return (
    <>
      {JSON.stringify(data.data)}
    </>
  );
}

export default App;
