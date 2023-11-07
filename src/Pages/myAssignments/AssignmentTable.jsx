import React from 'react';

const AssignmentTable = ({assignment}) => {
    const{title,PhotoUrl,mark,pdfUrl,quickNote,userEmail,userName,status}=assignment
    return (
        <tr className='text-center'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={PhotoUrl} alt="assignment img" />
                        </div>
                    </div>
                    <div>
                    <div className="font-bold">{title}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
               {mark}
              
              
            </td>
            <td>N/A</td>
            <td>N/A</td>
            <th>
                <button className="btn btn-ghost btn-xs">{status}</button>
            </th>
        </tr>

    );
};

export default AssignmentTable;