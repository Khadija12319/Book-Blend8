import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import "../../App.css"

const Books = () => {

    const books = useLoaderData();
    return (
        <div className="container mx-auto mb-[130px]">
            <div>
                <h2 className="text-[#131313] text-[40px] font-bold text-center mt-[100px] mb-9 font2">Books</h2>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;