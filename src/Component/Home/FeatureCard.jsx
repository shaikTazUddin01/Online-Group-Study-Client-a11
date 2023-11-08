import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureCard = ({item}) => {
    const { _id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = item;
    return (
        <div>
            <div className="card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]">
                <div >
                    <figure className='rounded-t-2xl'><img src={PhotoUrl} alt="Shoes" className='h-[250px] w-full' /></figure>

                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">
                        {title}
                    </h2>
                    <p className='font-medium -mt-2 text-[#4e37aa]'>{date}</p>
                    <p>{discription?.slice(0, 100)}
                        <Link to={`/assignmentDetails/${_id}`} className='text-blue-500 font-semibold text-[16px] hover:text-blue-700'>
                            <span> See More....</span>
                        </Link>
                         </p>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl '>Level: <span className=' text-lg text-red-700'>{assignmentLevel}</span></p>
                        <p className='text-end text-xl font-bold'>Mark: <span className='text-lg text-blue-700'>{mark}</span></p>
                    </div>
                    <div className="card-actions justify-between">
                        {/* check currentuser == userEmail */}
                        {/* {currentUser === userEmail ?
                            <div className='flex gap-4'>
                                <Link to={`/updateAssignment/${_id}`}>
                                    <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><FaEdit></FaEdit></div>
                                </Link>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={() => handleDeleteAssignment(_id)}><AiTwotoneDelete></AiTwotoneDelete></div>

                            </div>
                            :
                            <div className='flex gap-4'>
                                <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserEdit}><FaEdit></FaEdit></div>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserdelete}><AiTwotoneDelete></AiTwotoneDelete></div>
                            </div>

                        } */}
                        {/* assignment details */}
                        {/* <Link to={`/assignmentDetails/${_id}`}>
                            <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><span>View Details</span><FaArrowRight></FaArrowRight></div>
                        </Link> */}
                    </div>
                    
                <p className='text-center'><span className='font-semibold'>Creadet : </span><span className='text-sm font-semibold'>{userName}</span><span className='text-blue-700'>({userEmail})</span></p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;