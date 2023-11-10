import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

//react pdf
import { Document, Page } from 'react-pdf';
import PdfCom from './PdfCom';
// import PdfCom from './PdfCom';
// //react pdf

const GIveMark = () => {

    // react pdf
    
    //navigate
    const navigate = useNavigate()
    //load data
    const expectedAssignment = useLoaderData()
    // console.log(expectedAssignment)
    const { _id, title, PhotoUrl, mark, pdfUrl, quickNote, userEmail, userName, status } = expectedAssignment

    const handleGiveMark = (event) => {
        event.preventDefault()
        const form = event.target;
        const giveMark = form.mark.value;
        const feedBack = form.feedBack.value;

        const giveMarkByUser = { giveMark, feedBack, status: "completed" }
        // const status='completed'
        axios.put(`https://online-group-study-server-kappa.vercel.app/submitedAssignment/${_id}`, giveMarkByUser)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success("SuccessFully You Marking This Assignment")
                    Swal.fire({
                        title: "SuccessFully You Marking This Assignment",
                        icon: 'success'
                    })
                    navigate('/submitedAssingment')
                } else {
                    toast.error("Already Marking This Assignment")
                }
            })
            .catch(err => toast.error(err));
        // console.log(giveMarkByUser)

    }
    return (
        // style={{ backgroundImage: `url(${loginbg})`}}
        <div className='min-h-[90vh] max-w-7xl mx-auto md:px-10'>


            <div className='flex flex-col mt-10 mb-20 gap-10 justify-center items-center w-[90%] md:w-3/4 lg:w-3/5 mx-auto shadow-xl shadow-[var(--bg-primary)] rounded-xl md:p-5'>

                <div className=''>
                    <img src={PhotoUrl} alt="" className=' w-full rounded-xl ' />
                </div>
                {/* body */}
                <div className='px-5 text-center md:text-left'>
                    <h2 className="text-xl md:text-2xl font-semibold">
                        Assignment Name: {title}
                    </h2>
                    <h1 className='font-bold mt-2 text-[#585858]'><span className='text-lg'>Examinee Name:</span> {userName} <span className='text-[#4e37aa]'>({userEmail})</span></h1>

                    <div className='flex justify-center md:justify-between my-2'>
                        <p className=' text-2xl font-bold '>Total Mark: <span className='text-xl text-blue-700'>{mark}</span></p>
                    </div>

                    <div className=' flex flex-col lg:flex-row lg:gap-2 items-center md:items-start'>
                    <p className=' text-2xl font-bold mb-2'>View Pdf:</p>
                        {/* <a href={pdfUrl}>
                            <button className='btn btn-success'>PdF Url</button>
                        </a> */}
                        <PdfCom pdfUrl={pdfUrl}></PdfCom>

                        

                    </div>
                    <p className='text-center md:text-left mt-5 px-2 md:px-0'><span className='text-2xl font-bold'>QuickNote: <span className='font-medium text-lg md:text-xl'>{quickNote}</span></span></p>
                    <div className="mt-5 shadow-xl shadow-red-400  border mb-10 rounded-md">

                        <form className="card-body " onSubmit={handleGiveMark}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Give Mark</span>
                                </label>
                                <input type="number" placeholder="Give Mark" className="input input-bordered" name='mark' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">FeedBack</span>
                                </label>
                                <textarea placeholder="Add FeedBack" className="textarea textarea-bordered textarea-md w-full text-[17px]" required name='feedBack'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Give Mark" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className='md:px-10'>
                    <h2 className="text-2xl font-semibold">
                        Assignment Name: {title}
                    </h2>
                    <h1 className='font-bold mt-2 text-[#585858]'><span className='text-lg'>Examinee Name:</span> {userName} <span className='text-[#4e37aa]'>({userEmail})</span></h1>
                  
                    <div className='flex justify-between my-2'>
                        <p className=' text-2xl font-bold'>Total Mark: <span className='text-xl text-blue-700'>{mark}</span></p>
                    </div>
                    <p className='text-lg'>
                        <span className=' text-2xl font-bold'>
                            Pdf Link:
                            </span> 
                            <div>
                            <a href={pdfUrl} 
                            className='text-blue-500 hover:text-blue-700'>{pdfUrl}
                            </a>
                            </div>
                            </p>
                    <p className='text-center mt-5 '><span className='text-2xl font-bold'>QuickNote</span></p>
                    <p className='text-lg'>{quickNote}</p>
                    
                    <div className="mt-5 shadow-xl shadow-red-400  border mb-10 rounded-md">
                       
                        <form className="card-body " onSubmit={handleGiveMark}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Give Mark</span>
                                </label>
                                <input type="number" placeholder="Give Mark" className="input input-bordered" name='mark' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">FeedBack</span>
                                </label>
                                <textarea placeholder="Add FeedBack" className="textarea textarea-bordered textarea-md w-full text-[17px]" required name='feedBack'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Give Mark" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>





            <ToastContainer></ToastContainer>
        </div>
    );
};

export default GIveMark;