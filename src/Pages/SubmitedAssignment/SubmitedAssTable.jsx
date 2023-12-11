import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SubmitedAssTable = ({ subAss }) => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const { _id, title, PhotoUrl, mark, pdfUrl, quickNote, userEmail, userName, status } = subAss
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
                <br />
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
                {
                    user?.email === userEmail ?
                        <div className='tooltip tooltip-left' data-tip="you cannot mark the assignment because this is your submitted assignment
                        " >
                            <button className="btn py-2 px-3" disabled>Give Mark</button>
                        </div>
                        :
                        <Link to={`/givemark/${_id}`}><button className="bg-[var(--bg-primary)] text-white py-2 px-3 rounded-md" disabled>Give Mark</button></Link>
                }
            </th>
        </tr>
    );
};

export default SubmitedAssTable;