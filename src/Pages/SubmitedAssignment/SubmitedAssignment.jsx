import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmitedAssTable from './SubmitedAssTable';
import loadingGif from '../../assets/img/loading/Spinner-1s-200px.gif'
import { AuthContext } from '../../Provider/AuthProvider';
const SubmitedAssignment = () => {
    const{user,darkTheme}=useContext(AuthContext)
    const userEmail=user?.email
    // console.log(userEmail)
    // const submitedAssignment = useLoaderData()
    const [submitedAssignment, setSubmitedAssignment] = useState([])
    const [pandingAssignment, setPandingAssignment] = useState([]);
    const [loader, setLoader] = useState(true)
    console.log(submitedAssignment)

    useEffect(() => {
        fetch(`https://online-group-study-server-kappa.vercel.app/submitedAssignment?email=${userEmail}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setSubmitedAssignment(data)
                setLoader(false)
            });
    }, [])


    useEffect(() => {
        const panding = submitedAssignment?.filter(ass => ass?.status !== 'completed')
        setPandingAssignment(panding)
        setLoader(false)
    }, [submitedAssignment])
    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img src={loadingGif} alt="" />
            </div>
        )
    }
    return (
        <div className={
            darkTheme?'min-h-[90vh] mx-auto max-w-7xl px-10 bg-[#202020] text-white'
            :'min-h-[90vh] mx-auto max-w-7xl px-10 bg-slate-50'
        }>
            <h1 className='text-4xl text-center mt-10 font-bold' >All Submited Assignment</h1>
            <div className="bg-[var(--bg-primary)] h-[3px] mt-3  w-[30%] md:w-[20%] mx-auto"></div>

            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead className={darkTheme?'text-white':'text-black'}>
                        <tr className='text-xl font-semibold text-center'>
                            <th>Title</th>
                            <th>Examinee Name</th>
                            <th>Total Mark</th>
                            <th>Status</th>
                            <th>Mark</th>
                            {/* <th>Pdf Url</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pandingAssignment?.map(subAss => <SubmitedAssTable subAss={subAss} key={subAss?._id}></SubmitedAssTable>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmitedAssignment;