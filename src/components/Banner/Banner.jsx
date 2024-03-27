import { NavLink } from "react-router-dom";
import banner from "../../assets/banner.png"
import "../../App.css"

const Banner = () => {
    return (
        <div>
            <div className="md:container md:mx-auto mx-5 flex md:flex-row flex-col-reverse justify-around py-20 bg-[#1313130D] rounded-3xl">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <h1 className="text-[#131313] lg:text-[56px] md:text-[40px] text-[26px] font-bold lg:leading-[84px] md:leading-[70px] leading-[50px] font2 text-center md:text-left md:pt-0 pt-3">Books to freshen up <br></br>your bookshelf</h1>
                    <NavLink to="/listed_books"><button className="text-white bg-[#23BE0A] md:px-7 px-4 py-3 md:py-5 rounded-lg md:mt-12 mt-7 text-lg md:text-xl md:font-bold font-semibold font1">View The List</button></NavLink>
                </div>
                <div className="w-auto">
                    <img src={banner} alt=""  className="h-[395px] w-auto"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;