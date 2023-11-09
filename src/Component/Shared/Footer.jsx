import logo from '/vite.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[var(--bg-primary)] text-white ">
            <aside className='flex flex-col justify-center items-center'>
                <img src={logo} alt="" className='h-14' />
                <p className='text-center'>Copyright © 2023 - All right reserved by Taz Ahmed</p>
            </aside>
            <nav className='hidden md:flex md:flex-col'>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='hidden md:flex md:flex-col'>
                <header className="footer-title">Menu</header>
                <a className="link link-hover" >Home</a>
                <a className="link link-hover">Assignment</a>
                <a className="link link-hover">Sign In</a>
                <a className="link link-hover">Sign Up</a>
            </nav>
            <nav className='hidden md:flex md:flex-col'>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;