import { useContext, useState } from 'react';
import loginbg from '../../assets/img/assignmentBg/assignmentbg.jpg'
// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const CreateAssignments = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    //react date picker
    const [startDate, setStartDate] = useState(new Date());
    const handleCreateAssignment = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const PhotoUrl = form.imgUrl.value;
        const assignmentLevel = form.level.value;
        const mark = form.mark.value;
        const date = startDate.toUTCString();
        const discription = form.discription.value;
        const userEmail = user?.email
        const userName=user?.displayName
        // console.log(title,PhotoUrl,assignmentLevel,mark,date,discription);
        const NewAssignment = { title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail , userName}

        console.log(NewAssignment)
        fetch('http://localhost:5000/createAssignment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewAssignment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('SuccessFully Added a New Assignment')
                    form.reset()
                } else {
                    toast.error("Something is wrong please try again")
                }
            })



    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0  w-2/5 shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Create Assignment</h1>
                        <form className="card-body" onSubmit={handleCreateAssignment}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Title</span>
                                </label>
                                <input type="text" placeholder="Assignment Title" className="input input-bordered" name='title' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Image URL</span>
                                </label>
                                <input type="text" placeholder="Thumbnail Image URL" className="input input-bordered" name='imgUrl' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Difficulty level</span>
                                </label>
                                <select name="level" id="" className="input input-bordered">
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
                                <input type="number" placeholder="Add Assignment Mark" className="input input-bordered" name='mark' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Due Date</span>
                                </label>
                                {/* <input type="number" placeholder="Add Assignment Mark" className="input input-bordered" name='password' required /> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Description</span>
                                </label>
                                <textarea placeholder="Add Assignment Description" className="textarea textarea-bordered textarea-md w-full text-[17px]" required name='discription'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Create Assignment" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>

                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;