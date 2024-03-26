import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const BookCards = ({book}) => {
    return (
        <div className="container mx-auto">
            <div className="p-6 rounded-2xl border-[1px] flex">
               <div>
                <img src={book.image} alt="" className="h-[300px] w-auto"/>
               </div>
               <div>
                    <p>{book.bookName}</p>
                    <p>By : {book.author}</p>
                    <div className="flex gap-4">
                        <p>Tag</p>
                        {
                            (book.tags).map((x) => <p key={book.bookId} className="gap-3">{x}</p>)
                        }
                        <p><IoLocationOutline /> Year of Publishing: {book.yearOfPublishing}</p>
                    </div>
                    <div>
                    <span><GoPeople />Publisher: {book.publisher}</span>
                    <span><IoReaderOutline />Page {book.totalPages}</span>
                    </div>
                    <hr />
                    <div className="flex gap-6">
                        <button>Category: {book.category}</button>
                        <button>Rating: {book.rating}</button>
                        <Link to={`/book/${book.bookId}`}><button>View Details</button></Link>
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