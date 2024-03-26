import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const {bookId,bookName,author,image,category,tags,rating} = book;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="border-[1px] p-6 rounded-2xl">
            <div className="flex justify-center bg-[#F3F3F3] rounded-2xl">
                <img src={image} alt="" className='py-8 h-[300px] w-auto'/>
            </div>
            <ul className='flex gap-3'>
                {
                    tags.map((x) => <li key={bookId} className='text-[#23BE0A] text-lg font-medium px-4 py-2 background mt-6 font1'>{x}</li>)
                }
            </ul>
            <h2 className='font2 text-[#131313] text-2xl font-bold py-4 flex-grow'>{bookName}</h2>
            <h3 className='text-[#131313CC] text-lg font-medium flex-grow'>By : {author}</h3>
            <hr className='border-dashed my-5 font1'/>
            <div className='flex justify-between text-[#131313CC]'>
                <p className='text-lg font-medium'>{category}</p>
                <p className='flex justify-center items-center gap-2 text-lg font-medium'>{rating} <FaRegStar /></p>
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