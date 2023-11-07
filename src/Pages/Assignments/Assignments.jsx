import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";
import axios from "axios";

const Assignments = () => {
    const loadAssignment = useLoaderData()
    const[assignments,setAssignment]=useState(loadAssignment)
    const handleDifficultLevel=(e)=>{
    //    e.preventDefault();
    //   const level=e.target.value
    //   axios.get(`http://localhost:5000/getAssignmentUsingLevel?assignmentLevel=${level}`).then(res=>console.log(res.data))
    //   .catch(err=>console.log(err))

    }
    return (
        <div className="min-h-[90vh]">
            <div className="my-10 text-center">
          
                <h1 className="text-6xl mb-1">Assignments For You</h1>
                <p className="text-[16px] mt-2">see assignment accept challenge and increase your knowledge</p>
                <div className="bg-[var(--bg-primary)] h-[3px] mt-2 w-[20%] mx-auto"></div>
                    {/* filter Difficult Level */}
                <div > 
                    <span className="text-xl font-semibold">Filter Assignments Based On Assignment Difficulty Level </span>
                    <select name="" id="" className="rounded border-[var(--bg-primary)] mt-5 border-2 text-lg font-semibold py-1 px-2" onChange={handleDifficultLevel}>
                        <option value="" >---</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
            {
                assignments.length > 0 ?
                    <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            assignments?.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} setAssignment={setAssignment} loadAssignment={assignments}></AssignmentCard>)
                        }
                    </div> :
                    <div className="flex justify-center items-center mt-10">
                        <h1 className="text-xl md:text-2xl font-semibold">No Assignment Added.! Please Add Some Assignment..</h1>
                    </div>
            }
        </div>
    );
};

export default Assignments;