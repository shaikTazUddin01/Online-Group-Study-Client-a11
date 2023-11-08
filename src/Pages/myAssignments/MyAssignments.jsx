import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import AssignmentTable from './AssignmentTable';

const MyAssignments = () => {
    const [myAssignment, setMyAssignment] = useState([]);
    const { user } = useContext(AuthContext)

    const userEmail = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myAssignment?email=${userEmail}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setMyAssignment(data));

    }, [])
    return (
        <div className='min-h-[90vh] mx-auto max-w-7xl px-10'>
            <h1 className='text-4xl text-center mt-10 font-bold' >My Assignent</h1>
            <div className="bg-[var(--bg-primary)] h-[3px] mt-3 w-[15%] mx-auto"></div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-semibold text-black text-center'>
                            <th>Title</th>
                            <th>Total Mark</th>
                            <th>Obtain Mark</th>
                            <th>FeedBack</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myAssignment?.map(assignment=><AssignmentTable assignment={assignment} key={assignment?._id}></AssignmentTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignments;