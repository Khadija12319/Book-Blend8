import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import "../../App.css"

const Books = () => {

    const books = useLoaderData();
    return (
        <div className="container mx-auto md:mb-[130px] mb-20">
            <div>
                <h2 className="text-[#131313] md:text-[40px] text-3xl font-bold text-center mt-[100px] mb-9 font2">Books</h2>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mx-0 md:mx-5 mx-0">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;