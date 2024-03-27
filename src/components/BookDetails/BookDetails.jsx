import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveBookList,saveWishList,removeFromWishList} from "../../Utility/Localstorage"
import { useState } from "react";
import '../../App.css';

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
        } 
        else if(!booklist){
            toast.error("This book is already in your Wishlist!");
        }
        else {
            toast.error("This book is already in your Readlish!");
        }
    
    };

    
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId ===idInt);

    return (
        <div className="container mx-auto flex lg:flex-row flex-col gap-12 mb-[160px]"> 
            <div className="bg-[#1313130D] flex-1 rounded-2xl">  
                <img src={book.image} alt="" className="w-full md:p-[74px] p-[30px]"/>
            </div>
            <div className="flex-1 lg:mx-0 mx-5">
                <h1 className="text-[#131313] lg:text-[40px] md:text-[34px] text-[30px] font-bold pb-4 font2">{book.bookName}</h1>
                <p className="text-[#131313CC] font-medium md:text-xl text-lg  pb-6 font1">By : {book.author}</p>
                <hr />
                <p className="pt-4 text-[#131313CC] font-medium md:text-xl text-lg pb-4 font1">{book.category}</p>
                <hr />
                <p className="text-[#131313] text-base font-bold leading-7 font1 pt-6">Review : <span className="text-[#131313B3] font-normal">{book.review}</span></p>
                <div>
                    <p className="flex gap-4 text-[#131313] font-bold leading-7 items-center py-6">Tag 
                        <span className="md:flex gap-3">
                            {
                                book.tags.map((x) => <p key={book.bookId} className="background text-[#23BE0A] text-base font-medium px-4 py-2 my-1">#{x}</p>)
                            }
                        </span>
                    </p>
                </div>
                <hr />
                <div className="flex gap-[60px] pt-6 font1">
                    <div className="space-y-3">
                        <p className="text-[#131313B3] text-base font-normal">Number of Pages:</p>
                        <p className="text-[#131313B3] text-base font-normal">Publisher:</p>
                        <p className="text-[#131313B3] text-base font-normal">Year of Publishing:</p>
                        <p className="text-[#131313B3] text-base font-normal">Rating:</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[#131313] font-semibold text-base">{book.totalPages}</p>
                        <p className="text-[#131313] font-semibold text-base">{book.publisher}</p>
                        <p className="text-[#131313] font-semibold text-base">{book.yearOfPublishing}</p>
                        <p className="text-[#131313] font-semibold text-base">{book.rating}</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                <button onClick={handleReadButtonClicked} type="button" className="py-[18px] px-[28px] text-black rounded-lg border-[1px] text-lg font-semibold">Read</button>
                <button onClick={handleWishlistButtonClicked} type="button" className="py-[18px] px-[28px] text-white bg-[#50B1C9] rounded-lg text-lg font-semibold">Wishlist</button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;