import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const {bookId,bookName,author,image,category,tags,rating} = book;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="border-[1px] p-6 md:mx-0 mx-5 rounded-2xl">
            <div className="flex justify-center bg-[#F3F3F3] rounded-2xl">
                <img src={image} alt="" className='py-8 h-[300px] w-auto'/>
            </div>
            <ul className='md:flex gap-2 w-fit'>
                {
                    tags.map((x) => <li key={bookId} className='text-[#23BE0A] text-base md:text-[16px] font-normal md:font-medium px-[12px] py-2 background mt-6 font1 w-fit'>{x}</li>)
                }
            </ul>
            <h2 className='font2 text-[#131313] md:text-2xl text-xl font-bold py-4 flex-grow'>{bookName}</h2>
            <h3 className='text-[#131313CC] md:text-lg text-base font-medium flex-grow'>By : {author}</h3>
            <hr className='border-dashed md:my-5 my-3 font1'/>
            <div className='flex justify-between text-[#131313CC]'>
                <p className='md:text-lg text-base font-medium'>{category}</p>
                <p className='flex justify-center items-center gap-2 md:text-lg text-base font-medium'>{rating} <FaRegStar /></p>
            </div>
        </div>
        </Link>
    );
};

Book.propTypes = {
  tags: PropTypes.array,
  book: PropTypes.object,
}

export default Book;