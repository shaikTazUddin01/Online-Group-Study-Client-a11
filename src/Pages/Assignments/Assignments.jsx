import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import './Assignment.css'
import loadingGif from '../../assets/img/loading/Spinner-1s-200px.gif'
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../Provider/AuthProvider";


const Assignments = () => {
    const {darkTheme}=useContext(AuthContext)
    const loadAssignment = useLoaderData()

    // const[paginationData,setPaginationData]=useState()
    const [loader, setLoader] = useState(true)

    //pagination
    // const count = loadAssignment?.length;
    const [count, setCount] = useState(loadAssignment?.length)
    let itemPerPage = 6;

    const totalPage = Math.ceil(count / itemPerPage)

    const pages = [...Array(totalPage).keys()]
    console.log(pages)
    const [currentPage, setcurrentPage] = useState(0)



    //set data by filter--->
    const [assignments, setAssignment] = useState()

    useEffect(() => {
        axios.get(`https://online-group-study-server-kappa.vercel.app/pagination?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                setAssignment(res.data)
                setLoader(false)
                itemPerPage = 6
            })
            .catch(err => console.log(err))
    }, [currentPage, itemPerPage])
  
    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img src={loadingGif} alt="" />
            </div>
        )
    }

  


    const handleDifficultLevel = (e) => {
        const level = e.target.value
        axios.get(`https://online-group-study-server-kappa.vercel.app/getAssignmentUsingLevel?assignmentLevel=${level}`)
            .then(res => {
                setAssignment(res.data)
                setCount(res?.data?.length)
                //  console.log(res?.data?.length)
                setcurrentPage(0)
            })
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

// aos animation
AOS.init();

    return (
        <div className={darkTheme?"min-h-[90vh] bg-[#202020] text-white ":"min-h-[90vh] "}>
            <div className="py-10 text-center "
            data-aos="fade-up"
            data-aos-duration="1500"
            >

                <h1 className="text-4xl md:text-6xl mb-1">Assignments For You</h1>
                <p className="text-[16px] mt-2">see assignment accept challenge and increase your knowledge</p>
                <div className="bg-[var(--bg-primary)] h-[3px] mt-2 mb-5 w-[20%] mx-auto"></div>
                {/* filter Difficult Level */}
                <div >
                    <span className="text-xl font-semibold">Filter Assignments Based On Assignment Difficulty Level </span>
                    <select name="" id="" className="rounded border-[var(--bg-primary)] mt-5 border-2 text-lg font-semibold py-1 px-2 text-black" onChange={handleDifficultLevel}>
                        <option value="all" >--See All--</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
           

        <div 
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="400"
        >

        

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

</div>



            <div className="text-center py-10 pagination">
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