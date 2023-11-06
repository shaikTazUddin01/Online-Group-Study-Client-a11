import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyAssignments = () => {
    const [myAssignment,setMyAssignment]=useState([]);
    const {user}=useContext(AuthContext)
  
   const userEmail=user?.email;
     
    useEffect(()=>{
        fetch(`http://localhost:5000/myAssignment?email=${userEmail}`)
    },[])
    return (
        <div className='min-h-[90vh]'>
            <h1>my Assignent</h1>
        </div>
    );
};

export default MyAssignments;