import React from 'react';
import { Link } from 'react-router-dom';

const SubmitedAssTable = ({ subAss }) => {
    const { _id,title, PhotoUrl, mark, pdfUrl, quickNote, userEmail, userName, status } = subAss
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
          {userName}
          <br/>
          {userEmail}
        </td>
            <td>{mark}</td>
            {/* <td>{pdfUrl}</td> */}
            <td >
                <span className='bg-green-700 text-white py-2 px-3 rounded-md'>
                {status}
                </span>
                </td>
            <th>
                <Link to={`/givemark/${_id}`}><button className="bg-[var(--bg-primary)] text-white py-2 px-3 rounded-md">Give Mark</button></Link>
            </th>
        </tr>
    );
};

export default SubmitedAssTable;