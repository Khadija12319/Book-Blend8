import { NavLink } from "react-router-dom";
import "./Header.css"
import "../../App.css"
const Header = () => {
    return (
        <div className="container mx-auto py-[30px]">
            <div className="md:navbar grid justify-center md:justify-between">
            <div className="md:navbar-start">
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
                <a className="btn btn-ghost text-3xl font-bold font1">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4" id="sidebar-lg">
                <NavLink to="/"><a className="px-5 py-[14px] text-gray-900 font-normal text-lg font1">Home</a></NavLink>
                <NavLink to="/listed_books"><a className="px-5 py-[14px] text-gray-900 font-normal text-lg font1">Listed Books</a></NavLink>
                <NavLink to="/pages_to_read"><a className="px-5 required:py-[14px] text-gray-900 font-normal text-lg font1">Pages to Read</a></NavLink>
                </ul>
            </div>
            <div className="lg:navbar-end gap-4 space-x-5 md:space-x-0">
                <a className="btn btn-success px-[28px] border-none bg-[#23BE0A] text-white font-normal text-lg font1">Sign In</a>
                <a className="btn btn-primary px-[28px] border-none bg-[#59C6D2] text-white font-normal text-lg font1">Sign Up</a>
            </div>
            </div>
        </div>
    );
};

export default Header;