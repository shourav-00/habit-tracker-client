import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import AllUserInfo from '../Components/AllUserInfo';

const MyHabits = () => {
    //const {loading,user}=use(AuthContext)
    const [userAllData,setuserAllData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/UserData')
        .then(res=>res.json())
        .then(data=>{
            setuserAllData(data);
            //console.log(data)
        })
        .catch(err=>toast.error(err.message))
    },[])
    return (
        <div>
          <AllUserInfo userAllData={userAllData} setuserAllData={setuserAllData}></AllUserInfo>
        </div>
    );
};

export default MyHabits;