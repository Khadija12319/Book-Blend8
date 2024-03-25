import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const notify = () => {
        toast("You have Applied successfully!")
    };
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId ===idInt)
    console.log(idInt,book,books);

    return (
        <div className="container mx-auto flex gap-12 mb-[160px]"> 
            <div className="bg-[#1313130D] p-[74px] flex-1">  
                <img src={book.image} alt="" className="h-auto w-full"/>
            </div>
            <div className="flex-1">
                <h1>{book.bookName}</h1>
                <p>By : {book.author}</p>
                <hr />
                <p>{book.category}</p>
                <hr />
                <p>Review : <span>{book.review}</span></p>
                <div>
                    <p className="flex gap-4">Tag 
                        <span className="flex gap-3">
                            {
                                book.tags.map((x) => <p key={book.bookId}>#{x}</p>)
                            }
                        </span>
                    </p>
                </div>
                <hr />
                <div className="flex gap-[60px]">
                    <div>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div>
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;