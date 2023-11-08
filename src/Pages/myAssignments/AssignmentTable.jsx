import React from 'react';

const AssignmentTable = ({ assignment }) => {
    const { title, PhotoUrl, mark, pdfUrl, quickNote, userEmail, userName, status, feedBack, giveMark } = assignment
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
            <td>{giveMark ? giveMark : "Processing"}</td>
            <td>{feedBack ? feedBack : "Processing"}</td>
            {
                status == "pending" ?
                    <th>
                        <button className="bg-green-700 text-white py-2 px-3 rounded-xl">{
                            status
                        }</button>
                    </th> :
                    <th>
                        <button className="bg-[var(--bg-primary)] text-white py-2 px-3 rounded-xl">{
                            status
                        }</button>
                    </th>
            }

        </tr>

    );
};

export default AssignmentTable;