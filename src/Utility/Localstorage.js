const getStoredBookList = () => {
    const storedBooks = localStorage.getItem('read-list');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
};

const saveBookList = id => {
    const storedBook = getStoredBookList();
    const exists = storedBook.find(bookId => bookId === id);
    if (!exists) {
        storedBook.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedBook));
    }
};

const getStoredWishList = () => {
    const storedWishLists = localStorage.getItem('wish-list');
    if (storedWishLists) {
        return JSON.parse(storedWishLists);
    }
    return [];
};

const removeFromWishList = id => {
    const storedBook = getStoredWishList();
    const updatedWishList = storedBook.filter(bookId => bookId !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
}

const saveWishList = id => {
    const storedWishBook = getStoredWishList();
    const exists = storedWishBook.find(bookId => bookId === id);
    if (!exists) {
        storedWishBook.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishBook));
    }
};
export { saveBookList, getStoredBookList,getStoredWishList,saveWishList,removeFromWishList };