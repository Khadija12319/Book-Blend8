import { NavLink } from "react-router-dom";
import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-around py-20 bg-[#1313130D] rounded-3xl">
                <div className="flex flex-col justify-center">
                    <h1 className="text-[#131313] text-[56px] font-bold leading-[84px]">Books to freshen up <br></br>your bookshelf</h1>
                    <NavLink to="/listed_books"><button className="text-white bg-[#23BE0A] px-7 py-5 rounded-lg mt-12 text-xl font-bold">View The List</button></NavLink>
                </div>
                <div>
                    <img src={banner} alt=""  className="h-[395px] w-auto"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;