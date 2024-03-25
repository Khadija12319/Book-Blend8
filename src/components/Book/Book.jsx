import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
const Book = ({book}) => {
    const {bookId,bookName,author,image,category,tags,rating} = book;
    return (
        <div className="border-[1px] p-6 rounded-2xl">
            <div className="flex justify-center bg-[#F3F3F3] rounded-2xl">
                <img src={image} alt="" className='py-8'/>
            </div>
            <ul className='flex gap-3'>
                {
                    tags.map((x) => <li key={bookId}>{x}</li>)
                }
            </ul>
            <h2>{bookName}</h2>
            <h3>By : {author}</h3>
            <hr className='border-dashed'/>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex justify-center items-center gap-2'>{rating} <FaRegStar /></p>
            </div>
        </div>
    );
};

Book.propTypes = {
  tags: PropTypes.array,
  book: PropTypes.object,
}

export default Book;