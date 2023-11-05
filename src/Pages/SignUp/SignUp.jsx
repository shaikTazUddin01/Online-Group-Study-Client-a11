import { Link } from 'react-router-dom';
import loginbg from '../../assets/img/loginbg/loginbg.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/FireBase.config';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const { handleSignUp } = useContext(AuthContext)
    const handleSignUpForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photourl.value;
        const password = form.password.value;

        // console.log(name,email,photoUrl,password)
        handleSignUp(email, password)
            .then(result => {
                // console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    toast.success("SuccessFully Sign Up")
                }).catch((error) => {
                    toast.success("SomeThing is Wrong Please Try Again")
                })
            }).catch(err => toast.success("SomeThing is Wrong Please Try Again"))
    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0 w-2/5  shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Sign Up</h1>
                        <form className="card-body" onSubmit={handleSignUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" name='photourl' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                        <div className='flex justify-center items-center -mt-5'>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                            <div className='px-2'>
                                <h1 className='text-lg font-semibold'>OR</h1>
                            </div>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                        </div>
                        <div className='flex justify-center mb-5'>
                            <p className='text-[18px] font-semibold'>Have An Account <Link to={'/login'} className='text-blue-700 font-bold'>Sign In</Link></p>
                        </div>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;