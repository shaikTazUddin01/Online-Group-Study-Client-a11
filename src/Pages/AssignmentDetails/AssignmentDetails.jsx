import { FaArrowRight } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AssignmentDetails = () => {
    AOS.init()
    const assignmentData = useLoaderData()
    const { _id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = assignmentData;

    return (
        <div className='max-w-7xl mx-auto'
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <div className='text-center mt-10'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Assignment Details</h1>
                <p className='text-lg mt-1'>Take this challenge and make yourself</p>
                <div className="bg-[var(--bg-primary)] h-[3px] mt-2 w-[30%] md:w-[15%] mx-auto"></div>
            </div>
            <div className='flex flex-col lg:flex-row mt-10 mb-20 gap-10 justify-center items-center'>
                <div className='lg:w-3/5 px-2 md:px-10 lg:px-0'>
                    <img src={PhotoUrl} alt="" className='h-[400px] w-full rounded-xl shadow-xl shadow-[var(--bg-primary)]' />
                </div>
                <div className=' lg:w-2/5 px-2 md:px-10 lg:px-0'>
                    <h2 className="text-4xl font-semibold">
                        {title}
                    </h2>
                    <h1 className='font-bold mt-2 text-[#585858]'><span className='text-lg'>CreatedBy :</span> {userName} <span className='text-[#4e37aa]'>({userEmail})</span></h1>
                    <p className='font-medium my-2 text-[#4e37aa]'>{date}</p>
                    <div className='flex justify-between my-2'>
                        <p className='font-bold text-2xl '>Level: <span className='text-xl text-red-700'>{assignmentLevel}</span></p>
                        <p className='text-end text-2xl font-bold'>Mark: <span className='text-xl text-blue-700'>{mark}</span></p>
                    </div>
                    <p className='text-lg'>{discription}</p>
                    <div className="flex justify-between mt-5">
                        {/* <Link to={`/`}>
                            <div className="bg-red-600 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><AiFillDelete></AiFillDelete><span>Delete Assignment</span></div>
                        </Link> */}
                        <Link to={`/takeAssignment/${_id}`}>
                            <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"
                            ><span>Take Assignment</span><FaArrowRight></FaArrowRight></div>
                        </Link>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;