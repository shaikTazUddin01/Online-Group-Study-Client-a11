import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmitedAssTable from './SubmitedAssTable';
import loadingGif from '../../assets/img/loading/Spinner-1s-200px.gif'
const SubmitedAssignment = () => {
    const submitedAssignment = useLoaderData()
    const [pandingAssignment,setPandingAssignment]=useState([]);
    const[loader,setLoader]=useState(true)
    useEffect(()=>{
        const panding=submitedAssignment?.filter(ass=>ass?.status !=='completed')
        setPandingAssignment(panding)
        setLoader(false)
    },[])
    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img src={loadingGif} alt="" />
            </div>
        )
    }
    return (
        <div className='min-h-[90vh] mx-auto max-w-7xl px-10'>
            <h1 className='text-4xl text-center mt-10 font-bold' >All Submited Assignment</h1>
            <div className="bg-[var(--bg-primary)] h-[3px] mt-3 w-[20%] mx-auto"></div>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-semibold text-black text-center'>
                            <th>Title</th>
                            <th>Examinee Name</th>
                            <th>Total Mark</th>
                            {/* <th>Pdf Url</th> */}
                            <th>Status</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pandingAssignment?.map(subAss => <SubmitedAssTable subAss={subAss} key={subAss?._d}></SubmitedAssTable>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmitedAssignment;