import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyHabits = () => {
    const {loading}=use(AuthContext)
    if(loading){
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    }
    return (
        <div>
            MyHabits
MyHabits   From Db
        </div>
    );
};

export default MyHabits;