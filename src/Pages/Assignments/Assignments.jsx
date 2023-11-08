import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import './Assignment.css'

const Assignments = () => {
    const loadAssignment = useLoaderData()
    
    //set data by filter--->
    const [assignments, setAssignment] = useState(loadAssignment)



    //pagination
    const count = loadAssignment?.length;
    const itemPerPage = 6;

    const totalPage = Math.ceil(count / itemPerPage)

    const pages = [...Array(totalPage).keys()]
    console.log(pages)
    const [currentPage, setcurrentPage] = useState(0)


    

     
    const handleDifficultLevel = (e) => {
        const level = e.target.value
        axios.get(`http://localhost:5000/getAssignmentUsingLevel?assignmentLevel=${level}`).then(res => setAssignment(res.data))
            .catch(err => console.log(err))

    }


    const handlePri = () => {
        if (currentPage > 0) {
            setcurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages?.length - 1) {
            setcurrentPage(currentPage + 1)
        }
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
                        <option value="all" >--See All--</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>


            {
                assignments?.length > 0 ?
                    <div className="max-w-7xl mx-auto my-10 grid grid-cols-1  lg:grid-cols-3 gap-6 px-2 md:px-10 lg:px-0">


                        {
                            assignments?.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} setAssignment={setAssignment} loadAssignment={assignments}></AssignmentCard>)
                        }


                        
                    </div>
                    :
                    <div className="flex justify-center items-center mt-10">
                        <h1 className="text-xl md:text-2xl font-semibold">No Assignment Added.! Please Add Some Assignment..</h1>
                    </div>
            }





            <p>page: {currentPage}</p>
            <div className="text-center my-10 pagination">
                <button className=" py-2 rounded-md mr-5  px-6 text-[16px]" onClick={handlePri}>Privous</button>
                {
                    pages?.map(page => <button key={page} onClick={() => setcurrentPage(page)} className={currentPage == page ? 'selected py-2 rounded-md mr-5  px-6 text-[16px]' : 'py-2 rounded-md mr-5  px-6 text-[16px]'}>{page + 1}</button>)
                }
                <button className=" py-2 rounded-md mr-5  px-6 text-[16px]" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Assignments;