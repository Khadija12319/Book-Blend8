import "../../App.css"
import ListedBookSection from "../ListedBookSection/ListedBookSection";
const ListedBooks = () => {
    return (
        <div>
            <div className="container mx-auto py-[34px] bg-[#1313130D] rounded-2xl">
                <h1 className="font1 text-[#131313] text-3xl font-bold text-center">Books</h1>
            </div>
            <div>
                <ListedBookSection></ListedBookSection>
            </div>
        </div>
    );
};

export default ListedBooks;