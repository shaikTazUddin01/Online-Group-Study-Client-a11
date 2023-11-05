import { useState } from 'react';
import loginbg from '../../assets/img/assignmentBg/assignmentbg.jpg'
// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
    //react date picker
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0  w-2/5 shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Create Assignment</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Title</span>
                                </label>
                                <input type="text" placeholder="Assignment Title" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Image URL</span>
                                </label>
                                <input type="text" placeholder="Thumbnail Image URL" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Difficulty level</span>
                                </label>
                                <select name="" id="" className="input input-bordered" placeholder='Easy'>
                                    {/* <option value="">Assignment Level</option> */}
                                    <option value="">Easy</option>
                                    <option value="">Medium</option>
                                    <option value="">Hard</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Mark</span>
                                </label>
                                <input type="number" placeholder="Add Assignment Mark" className="input input-bordered" name='password' required />
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
                                <textarea placeholder="Add Assignment Description" className="textarea textarea-bordered textarea-md w-full text-[17px]" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Create Assignment" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;