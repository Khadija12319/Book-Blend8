import { useLoaderData } from "react-router-dom";
import "../../App.css"
import { GrUserManager } from "react-icons/gr";
import { MdContactPage } from "react-icons/md";
const FeaturedBooks = () => {
    const books =useLoaderData();

    return (
        <div>
            <div>
                <div className="container mx-auto bg-emerald-100 rounded-3xl mb-20">
                    <h3 className="text-4xl font-bold py-20 text-center font1">Featured Books Here</h3>
                </div>
                <div className="mb-28">
                    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5">
                        {
                            books.map((book) => (
                                <div className="p-5 md:flex bg-green-50 rounded-2xl gap-6" key={book.bookId}>
                                    <div className="tooltip tooltip-accent rounded-2xl flex items-center md:mb-0 mb-4" data-tip={book.bookName}>
                                        <img src={book.image} alt="" className="w-[280px] h-auto rounded-2xl"/>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-2xl font-semibold pb-3 font2">{book.bookName}</h2>
                                        <p className="text-lg font-normal font1 pb-2 flex gap-2 items-center"><GrUserManager className="text-xl"/> By : {book.author}</p>
                                        <p className="text-[16px] font-medium pb-4 font1">Genre : {book.category}</p>
                                        <hr className="w-full"/>
                                        <p className="py-4 text-lg font-bold"> Short Description: <span className="font-normal">{book.shortDescription}</span> </p>
                                        <hr></hr>
                                        <div className="space-y-[6px] pt-4">
                                            <p className="text-lg">Rating : {book.rating}</p>
                                            <p className="flex gap-2 text-lg items-center"><MdContactPage  className="text-xl"/><span>Pages : {book.totalPages}</span></p>
                                            <p className="text-lg">Published Date : {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBooks;