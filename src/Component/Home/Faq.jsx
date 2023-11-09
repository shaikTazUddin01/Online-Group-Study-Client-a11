import faqimg from '../../assets/img/faq/faq.jpg'
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Faq = () => {
    // aos animation
    AOS.init();
    return (
        <div className='max-w-7xl mx-auto md:my-20'
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div>
                <h1 className='text-5xl font-bold text-center'>Faq Section</h1>
                <div className="bg-[var(--bg-primary)] h-[3px] mt-4 w-[30%] md:w-[10%] mx-auto"></div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10'>
                <div className='w-[80%] md:w-1/2'
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <img src={faqimg} alt="" className='rounded-xl' />
                </div>
                <div className='w-full md:w-1/2 space-y-2'>
                    <div className="collapse collapse-arrow bg-base-200"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                     data-aos-duration="4500"
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I submit my assignment on the website
                        </div>
                        <div className="collapse-content">
                            <p>first you go assignment page and view details one assignmet here you see take assignme button i you can submit assignment</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                     data-aos-duration="3500"
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I edit my submission after it's uploaded
                        </div>
                        <div className="collapse-content">
                            <p>no you can not edit file after it's uploaded</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                     data-aos-duration="3000"
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What file formats are accepted for assignment uploads
                        </div>
                        <div className="collapse-content">
                            <p>the file formats are accepted for assignment uploads is pdf or doc</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                     data-aos-duration="2500"
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I check the status of my submitted assignment
                        </div>
                        <div className="collapse-content">
                            <p>you can  check the status of my assignment page</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                     data-aos-duration="2000"
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any specific requirements for naming files or documents
                        </div>
                        <div className="collapse-content">
                            <p>you must be submit pdf or doc formate file and must add quick note</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;