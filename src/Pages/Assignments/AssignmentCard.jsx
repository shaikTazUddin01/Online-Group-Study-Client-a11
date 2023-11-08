import { useContext } from 'react';
import { FaArrowLeft, FaArrowRight, FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';


const AssignmentCard = ({ assignment, setAssignment, loadAssignment }) => {
    const { user } = useContext(AuthContext)
    const currentUser = user?.email;
    // console.log(user)
    const { _id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = assignment;
    //check current user to update assignment
    const handleUserEdit = () => {
        toast.error("Only the user is able to Update an assignment who has created the assignment")
    }
    //check current user to delete assignment
    const handleUserdelete = () => {
        toast.error("Only the user is able to Delete an assignment who has created the assignment")
    }
    //handle delete assignment
    const handleDeleteAssignment = (id) => {
        console.log(id);

        //check confirm deleting
        Swal.fire({
            title: "Are you sure?",
            text: "To Delete this Assignment",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/createAssignment/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaning = loadAssignment.filter(assignment => assignment._id !== id);
                            // console.log(id)
                            // console.log(id?._id)
                            // console.log(remaning)
                            setAssignment(remaning);
                        } else {
                            toast.error("Something is wrong please try again")
                        }
                    }
                    )
                    .catch(err => toast.error(err))


            }
        });
    }
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
                    <p>{discription?.slice(0, 100)}<span className='text-black font-semibold text-lg'> ....</span></p>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl '>Level: <span className=' text-lg text-red-700'>{assignmentLevel}</span></p>
                        <p className='text-end text-xl font-bold'>Mark: <span className='text-lg text-blue-700'>{mark}</span></p>
                    </div>
                    <div className="card-actions justify-center md:justify-between">
                        {/* check currentuser == userEmail */}
                        {currentUser === userEmail ?
                            <div className='flex gap-4 '>
                                <Link to={`/updateAssignment/${_id}`}>
                                    <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><FaEdit></FaEdit></div>
                                </Link>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={() => handleDeleteAssignment(_id)}><AiTwotoneDelete></AiTwotoneDelete></div>

                            </div>
                            :
                            <div className='flex gap-4 '>
                                <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserEdit}><FaEdit></FaEdit></div>

                                <div className="bg-red-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2" onClick={handleUserdelete}><AiTwotoneDelete></AiTwotoneDelete></div>
                            </div>

                        }
                        {/* assignment details */}
                        <Link to={`/assignmentDetails/${_id}`}>
                            <div className="bg-[var(--bg-primary)] text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2"><span>View Details</span><FaArrowRight></FaArrowRight></div>
                        </Link>
                    </div>
                    <ToastContainer></ToastContainer>
                <p className='text-center'><span className='font-semibold'>Create By : </span><span className='text-sm font-semibold'>{userName}</span> <br /><span className='text-blue-700'>({userEmail})</span></p>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;