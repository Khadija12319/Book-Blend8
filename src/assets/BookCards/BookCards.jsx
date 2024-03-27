import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../../App.css'
const BookCards = ({book}) => {
    return (
        <div className="container mx-auto">
            <div className="p-6 rounded-2xl border-[1px] flex md:flex-row flex-col gap-6">
               <div className="md:w-[290px] mx-auto">
                <img src={book.image} alt="" className="h-[300px] w-[250px] px-[50px] lg:px-[50px] md:px-[20px] py-[30px] bg-[#1313130D] rounded-2xl"/>
               </div>
               <div className="w-[100%]">
                    <p className="text-[#131313] text-2xl font-bold font2 pb-4">{book.bookName}</p>
                    <p className="text-[#131313CC] text-base font-medium font1">By : {book.author}</p>
                    <div className="flex md:flex-row flex-col gap-9 items-center py-4">
                        <div className="flex md:flex-row flex-col md:gap-3 gap-1 items-center">
                        <p className="text-[#131313] font-bold text-base leading-7 font1">Tag</p>
                        {
                            (book.tags).map((x) => <p key={book.bookId} className="gap-3 background text-[#23BE0A] py-2 px-4 font1">#{x}</p>)
                        }
                        </div>
                        <p className="flex text-[#131313CC] text-base font-normal items-center font1"><IoLocationOutline className="text-2xl mr-2"/> Year of Publishing: {book.yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-6 pb-4">
                    <span className="flex gap-2 text-[#13131399] text-base font-normal font1"><GoPeople  className="text-2xl mr-[7px]"/>Publisher: {book.publisher}</span>
                    <span className="flex gap-2 text-[#13131399] text-base font-normal font1"><IoReaderOutline  className="text-2xl mr-[7px]"/>Page {book.totalPages}</span>
                    </div>
                    <hr className="w-[100%]"/>
                    <div className="flex md:gap-6 gap-1 pt-4">
                        <button className="text-[#328EFF] bg-[#328EFF26] py-[11px] md:px-5 px-2 rounded-full font1">Category: {book.category}</button>
                        <button className="py-[11px] md:px-5 px-2 rounded-full text-[#FFAC33] bg-[#FFAC3326] font1">Rating: {book.rating}</button>
                        <Link to={`/book/${book.bookId}`} className="py-[11px] md:px-5 px-2 rounded-full bg-[#23BE0A] text-white font1"><button>View Details</button></Link>
                    </div>

               </div>
            </div>
        </div>
    );
};

BookCards.propTypes={
    book: PropTypes.object.isRequired
}

export default BookCards;