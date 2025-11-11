import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PvRouter = ({children}) => {
    const {user}=use(AuthContext)
    const location=useLocation();
    console.log(location)
    if(user){
        return children
    }
     return  <Navigate state={location?.pathname} to='/login'></Navigate>
   
        
};

export default PvRouter;