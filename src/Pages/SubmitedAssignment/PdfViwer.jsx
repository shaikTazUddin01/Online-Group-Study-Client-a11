import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from './1.pdf'

function PdfViwer({ pdfUrl }) {
  console.log("pdf url", pdfUrl)
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className=''>
      <a href={pdfUrl} target="_blank" className='text-blue-500 hover:text-blue-700'>preview Pdf</a>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))?.map((x, i) => i + 1)?.map((page) => {
          return (

            <div className='bg-[#b8b7b7] p-2 mb-2' key={page}>
              <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
            </div>
          )
        })}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default PdfViwer