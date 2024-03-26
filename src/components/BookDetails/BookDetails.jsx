import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveBookList,saveWishList,removeFromWishList} from "../../Utility/Localstorage"
import { useState } from "react";

const BookDetails = () => {
    const [booklist, setBookList] = useState(false);
    const [wish, setWish] =useState(false);

    const handleReadButtonClicked = () => {
        if (!booklist) {
            setBookList(true);
            removeFromWishList(idInt);
            saveBookList(idInt);
            toast.success("Book Added to Readlist");
        } else if (booklist && !wish) {
            toast.error("You have already read this book!"); 
        } else {
            toast.error("You have already read this book!");
        }
    };
    
    const handleWishlistButtonClicked = () => {
        if (!wish && !booklist) {
            setWish(true);
            saveWishList(idInt);
            toast.success("Book Added to Wishlist");
        } else {
            toast.error("This book is already in your Wishlist!");
        }
    
    };

    
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId ===idInt);

    return (
        <div className="container mx-auto flex gap-12 mb-[160px]"> 
            <div className="bg-[#1313130D] p-[74px] flex-1 rounded-2xl">  
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
                <div className="flex gap-4">
                <button onClick={handleReadButtonClicked} type="button" className="py-[18px] px-[28px] text-black rounded-lg border-[1px] text-lg font-semibold">Read</button>
                <button onClick={handleWishlistButtonClicked} type="button" className="py-[18px] px-[28px] text-white bg-[#50B1C9] rounded-lg text-lg font-semibold">Wishlist</button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;