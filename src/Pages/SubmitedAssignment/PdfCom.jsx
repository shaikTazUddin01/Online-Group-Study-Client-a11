import React from 'react';
import { pdfjs } from 'react-pdf';
import PdfViwer from './PdfViwer';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PdfCom = ({ pdfUrl }) => {
    return (
        <div>
            {/* <a href={pdfUrl}><button>taz</button></a> */}
            {/* <a href={pdfUrl}> */}
            <button className='btn btn-success'
                onClick={() => document.getElementById('my_modal_1').showModal()}
            >PdF Url</button>
            {/* </a> */}

            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box ">

                        <PdfViwer pdfUrl={pdfUrl}></PdfViwer>
                        {/* close button */}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};



export default PdfCom;