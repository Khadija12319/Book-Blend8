const BookCards = ({book}) => {
    return (
        <div className="container mx-auto">
            <div className="p-6 rounded-2xl border-[1px] flex">
               <div>
                <img src={book.image} alt="" className="h-[300px] w-auto"/>
               </div>
               <div>
                    <p>{book.bookName}</p>
               </div>
            </div>
        </div>
    );
};

export default BookCards;