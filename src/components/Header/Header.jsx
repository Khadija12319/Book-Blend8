import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div className="container mx-auto py-[30px]">
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4" id="sidebar">
                    <NavLink to="/"><a className="px-5 py-[14px]">Home</a></NavLink>
                    <NavLink to="/listed_books"><a className="px-5 py-[14px]">Listed Books</a></NavLink>
                    <NavLink to="/pages_to_read"><a className="px-5 py-[14px]">Pages to Read</a></NavLink>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4" id="sidebar-lg">
                <NavLink to="/"><a className="px-5 py-[14px]">Home</a></NavLink>
                <NavLink to="/listed_books"><a className="px-5 py-[14px]">Listed Books</a></NavLink>
                <NavLink to="/pages_to_read"><a className="px-5 required:py-[14px]">Pages to Read</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
            </div>
        </div>
    );
};

export default Header;