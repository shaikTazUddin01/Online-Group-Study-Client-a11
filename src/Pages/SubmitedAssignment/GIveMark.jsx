import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import PdfCom from './PdfCom';
//react pdf
import { pdfjs } from 'react-pdf';
// import PdfCom from './PdfCom';
// //react pdf

const GIveMark = () => {
    
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
      ).toString();


    const expectedAssignment = useLoaderData()
    console.log(expectedAssignment)
    const { _id, title, PhotoUrl, mark, pdfUrl, quickNote, userEmail, userName, status } = expectedAssignment

    const handleGiveMark = (event) =>{
    event.preventDefault()
    const form = event.target;
    const giveMark = form.mark.value;
    const feedBack = form.feedBack.value;

    const giveMarkByUser = { giveMark, feedBack, status: "completed" }
    // const status='completed'
    axios.put(`http://localhost:5000/submitedAssignment/${_id}`,giveMarkByUser)
    .then(res=>{
        if(res.data.modifiedCount){
        toast.success("SuccessFully You Marking This Assignment")
    }else{
        toast.error("Already Marking This Assignment")
    }
})
    .catch(err=>toast.error(err));
    // console.log(giveMarkByUser)

    }
    return (
        // style={{ backgroundImage: `url(${loginbg})`}}
        <div className='min-w-[90vh] max-w-7xl mx-auto px-10'>

            <div className='flex flex-col mt-10 mb-20 gap-10 justify-center items-center w-3/5 mx-auto shadow-xl shadow-[var(--bg-primary)] rounded-xl p-5'>
                {/* <div> */}
                <div className=''>
                    <img src={PhotoUrl} alt="" className=' w-full rounded-xl ' />
                </div>
                <div className=' px-10'>
                    <h2 className="text-2xl font-semibold">
                        Assignment Name: {title}
                    </h2>
                    <h1 className='font-bold mt-2 text-[#585858]'><span className='text-lg'>Examinee Name:</span> {userName} <span className='text-[#4e37aa]'>({userEmail})</span></h1>
                    {/* <p className='font-medium my-2 text-[#4e37aa]'>{date}</p> */}
                    <div className='flex justify-between my-2'>
                        <p className=' text-2xl font-bold'>Total Mark: <span className='text-xl text-blue-700'>{mark}</span></p>
                    </div>
                    <p className='text-lg'>
                        <span className=' text-2xl font-bold'>
                            Pdf Link : <a href="">
                            {/* <PdfCom pdfUrl={pdfUrl}></PdfCom> */}
                            </a>
                            </span> 
                            <a href={pdfUrl} 
                            className='text-blue-500 hover:text-blue-700'>{pdfUrl}
                            </a>
                            </p>
                    <p className='text-center mt-5 '><span className='text-2xl font-bold'>QuickNote</span></p>
                    <p className='text-lg'>{quickNote}</p>
                    {/* -----GIve Mark form ------*/}
                    <div className="mt-5 shadow-xl shadow-red-400  border mb-10 rounded-md">
                        {/* <p className='text-center mt-5 '><span className='text-3xl font-bold'>Give Mark</span></p> */}
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
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GIveMark;