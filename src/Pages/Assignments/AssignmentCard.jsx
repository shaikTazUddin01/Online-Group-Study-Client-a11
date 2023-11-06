import { FaArrowLeft, FaArrowRight, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AssignmentCard = ({ assignment }) => {

    const {_id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = assignment;
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
                    {/* <div className="badge badge-secondary">{assignmentLevel}</div> */}
                    <p className='font-medium -mt-2 text-[#4e37aa]'>{date}</p>
                   <p>{discription?.slice(0,100)}<span className='text-blue-500 font-bold text-lg'>....</span></p>
                   <div className='flex justify-between'>
                    <p className='font-bold text-xl '>Level: <span className=' text-lg text-red-700'>{assignmentLevel}</span></p>
                    <p className='text-end text-xl font-bold'>Mark: <span className='text-lg text-blue-700'>{mark}</span></p>
                   </div>
                    <div className="card-actions justify-between">
                        <Link to={`/updateAssignment/${_id}`}>
                        <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><span>Update</span> <FaEdit></FaEdit></div>
                        </Link>
                       <Link to={`/assignmentDetails/${_id}`}>
                       <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><span>Assignment Details</span><FaArrowRight></FaArrowRight></div>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;