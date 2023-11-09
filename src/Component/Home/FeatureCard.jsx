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
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;