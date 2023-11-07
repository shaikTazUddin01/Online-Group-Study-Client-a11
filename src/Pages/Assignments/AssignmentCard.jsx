import { useContext } from 'react';
import { FaArrowLeft, FaArrowRight, FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const AssignmentCard = ({ assignment }) => {
    const { user } = useContext(AuthContext)
    const currentUser = user?.email;
    const { _id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = assignment;
    const handleUserEdit = () => {
        toast.error("Only The Person Can Update This Assignment Who Created This Assingment")
    }
    const handleUserdelete = () => {
        toast.error("Only The Person Can Delete This Assignment Who Created This Assingment")
    }
    // const handleDeleteAssignment=(id)=>{
    //     console.log(id);
    //     axios.delete(`http://localhost:5000/createAssignment/${_id}`)
    //     .then(res=>console.log(res.data))
    //     .catch(err=>console.log(err))
    // }
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
                    <p>{discription?.slice(0, 100)}<span className='text-blue-500 font-bold text-lg'>....</span></p>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl '>Level: <span className=' text-lg text-red-700'>{assignmentLevel}</span></p>
                        <p className='text-end text-xl font-bold'>Mark: <span className='text-lg text-blue-700'>{mark}</span></p>
                    </div>
                    <div className="card-actions justify-between">
                        {currentUser === userEmail ?
                            <div className='flex gap-4'>
                                <Link to={`/updateAssignment/${_id}`}>
                                    <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><FaEdit></FaEdit></div>
                                </Link>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={()=>handleDeleteAssignment({_id})}><AiTwotoneDelete></AiTwotoneDelete></div>

                            </div>
                            :
                            <div className='flex gap-4'>
                                <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserEdit}><FaEdit></FaEdit></div>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserdelete}><AiTwotoneDelete></AiTwotoneDelete></div>
                            </div>

                        }
                        <Link to={`/assignmentDetails/${_id}`}>
                            <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><span>View Details</span><FaArrowRight></FaArrowRight></div>
                        </Link>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;