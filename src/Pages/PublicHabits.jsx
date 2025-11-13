import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ViewAllPubHabits from '../Components/ViewAllPubHabits';


const PublicHabits = () => {
    const [pubUser,setPubUser]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/publicHabits')
        .then(res=>res.json())
        .then(data=>{
            setPubUser(data);
            
        })
        .catch(err=>toast.error(err.message));
    },[])
    return (
        <div>
            <ViewAllPubHabits pubUser={pubUser}>

            </ViewAllPubHabits>
        </div>
    );
};

export default PublicHabits;