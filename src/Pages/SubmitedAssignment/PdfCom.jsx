import React from 'react';
import { pdfjs } from 'react-pdf';
import PdfViwer from './PdfViwer';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PdfCom = ({ pdfUrl }) => {
    // console.log(pdfUrl)
    return (
        <div className='flex flex-col md:flex-row gap-4 px-16 md:px-0'>

            {/* <button className='btn btn-primary'
                onClick={() => document.getElementById('my_modal_3').showModal()}
            >Open PdF in Modal</button> */}
            <button className='btn btn-primary' onClick={() => document.getElementById('my_modal_3').showModal()}>Open in Modal</button>

            <a href={pdfUrl} className='hover:text-blue-600' target='_blank'>
            <button className='btn btn-primary'>
                Open New Window
                </button></a>
            {/* </a> */}

            <div>


                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                           
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">✕</button>
                        </form>
                        <iframe src={pdfUrl} width="95%" height="500px" className='mx-auto my-4'> </iframe>
                    </div>
                </dialog>


                {/* <dialog id="my_modal_3" className="modal ">
                    <div className="w-[90%] md:w-3/4 bg-base-300 p-5">

                        <iframe src={pdfUrl} width="90%" height="500px" className='mx-auto'> Pdf View</iframe>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-error">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog> */}
            </div>
        </div>
    );
};



export default PdfCom;