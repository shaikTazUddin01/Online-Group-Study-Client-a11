import { useContext } from 'react';
import loginbg from '../../assets/img/loginbg/loginbg.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const TakeAssignment = () => {
    const {user,darkTheme}=useContext(AuthContext)
    const{email,displayName}=user;
    const navigate=useNavigate()

    const currentAssignment=useLoaderData()
   const {title, PhotoUrl, assignmentLevel, mark, date, discription, userEmail, userName }=currentAssignment

    // console.log(email,displayName)

    const handleTakeAssignment = (e) => {
        e.preventDefault()
        const form = e.target;
        const pdfUrl=form.pdfUrl.value;
        const quickNote=form.quickNote.value;

        const takeAssignment={title,PhotoUrl,mark,pdfUrl,quickNote,userEmail:email,userName:displayName,status:"pending",givemark:'',feedBack:''}

        axios.post('https://online-group-study-server-kappa.vercel.app/submitedAssignment',takeAssignment)
        .then(res=>{
            if(res.data.acknowledged){
                // toast.success("successfully you submit this Assignment")
                Swal.fire({
                    title: 'successfully you submit this Assignment',
                    // text: 'Do you want to continue',
                    icon: 'success',
                    // confirmButtonText: 'Cool'
                  })
                navigate('/assignment')
             form.reset()
        }
    })
        .catch(err=>console.log(err))

        // console.log(takeAssignment)
    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
                <div className={
                    darkTheme?"flex justify-center items-center min-h-[100vh] bg-[#000000dc]":
                    "flex justify-center items-center min-h-[100vh] bg-[#00000062]"
                }>
                    <div className="card flex-shrink-0  md:w-2/4 lg:w-2/5 shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Take Assignment</h1>
                        <form className="card-body" onSubmit={handleTakeAssignment}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Pdf Url</span>
                                </label>
                                <input type="text" placeholder="Pdf Url" className="input input-bordered" name='pdfUrl' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Quick Note</span>
                                </label>
                                <textarea placeholder="Add Quick Note" className="textarea textarea-bordered textarea-md w-full text-[17px]" required name='quickNote'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Submit Assignment" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>

                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default TakeAssignment;