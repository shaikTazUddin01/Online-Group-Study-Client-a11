import { useContext, useState } from 'react';
import loginbg from '../../assets/img/assignmentBg/assignmentbg.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const assignmentData = useLoaderData()
    const navatage=useNavigate()
    

    const { _id, title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName } = assignmentData;
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const PhotoUrl = form.imgUrl.value;
        const assignmentLevel = form.level.value;
        const mark = form.mark.value;
        const discription = form.discription.value;
        const date = startDate.toUTCString();
        // console.log(title,PhotoUrl,assignmentLevel,mark,date,discription);
        const NewAssignment = { title, PhotoUrl, assignmentLevel, mark, discription,date }
        // console.log(date)
        // if (currentUser === userEmail) {  
            axios.put(`https://online-group-study-server-kappa.vercel.app/createAssignment/${_id}`, NewAssignment)
                .then(res => {
                    if (res?.data?.modifiedCount) {
                        Swal.fire({
                            title: 'SuccessFully Updated',
                            // text: 'Do you want to continue',
                            icon: 'success',
                            // confirmButtonText: 'Cool'
                          })
                      
                        navatage('/assignment')
    
                    } else {
                        toast.error("something is worng please try again")
                    }
                })
                .catch(err => toast.error(err));
        // }else{
        //     toast.error("You are not able to Update this assignments")
        // }

    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0 w-[90%] md:w-2/4  lg:w-2/5 shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Update Assignment</h1>
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Title</span>
                                </label>
                                <input type="text" placeholder="Assignment Title" className="input input-bordered" name='title' required defaultValue={title} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Image URL</span>
                                </label>
                                <input type="text" placeholder="Thumbnail Image URL" className="input input-bordered" name='imgUrl' required defaultValue={PhotoUrl} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Difficulty level</span>
                                </label>
                                <select name="level" id="" className="input input-bordered" defaultValue={assignmentLevel}>
                                    {/* <option value="">Assignment Level</option> */}
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Mark</span>
                                </label>
                                <input type="number" placeholder="Add Assignment Mark" className="input input-bordered" name='mark' required defaultValue={mark} />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Due Date</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full"  />
                        </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Description</span>
                                </label>
                                <textarea placeholder="Add Assignment Description" className="textarea textarea-bordered textarea-md w-full text-[17px]" required name='discription' defaultValue={discription}></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Update" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                        <ToastContainer></ToastContainer>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;