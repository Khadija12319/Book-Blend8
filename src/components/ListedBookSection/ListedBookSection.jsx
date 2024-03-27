import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-tabs/style/react-tabs.css';
import '../../App.css'
import {getStoredBookList,getStoredWishList} from '../../Utility/Localstorage'
import BookCards from '../../assets/BookCards/BookCards';
const ListedBookSection = () => {
    const [books, setBooks] =useState([]);
    const [selectedSortOption, setSelectedSortOption] = useState(''); 


    useEffect( () => {
        fetch('../../../public/Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    const storedBooks=getStoredBookList();
    const storedWishList = getStoredWishList();
    const readBookList=[];
    const storedWishBook= [];

    for (const id of storedBooks){
        const book= books.find(book => book.bookId === id);
        if(book){
            readBookList.push(book);
        }
    }

    for (const id of storedWishList){
        const book= books.find(book => book.bookId === id);
        if(book){
            storedWishBook.push(book);
        }
    }

    const sortBooks = (books, option) => {
        if (option === 'Rating') {
            return books.sort((a, b) => b.rating - a.rating);
        } else if (option === 'Publisher Year') {
            return books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        } else if (option === 'Number of Pages') {
            return books.sort((a, b) => b.totalPages - a.totalPages);
        }
        // Return the books array as is if no sorting option is selected
        return books;
    };

    const sortedReadBooks = selectedSortOption ? sortBooks(readBookList, selectedSortOption) : readBookList;
    const sortedWishlistBooks = selectedSortOption ? sortBooks(storedWishBook, selectedSortOption) : storedWishBook;
    

    return (
        <div>
            <div>
                <div className='container mx-auto flex items-center justify-center mt-[32px] mb-[56px]'>
                <Dropdown onChange={(option) => setSelectedSortOption(option.value)} options={['Rating', 'Publisher Year', 'Number of Pages']} placeholder="Sort By"  className='w-40'/>
                </div>
                <div className='container mx-auto'>
                <Tabs>
                    <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                    <div className='space-y-6 pt-6 mb-10'>
                        {
                          sortedReadBooks.map(book => (
                            <BookCards key={book.bookId} book={book}></BookCards>
                          ))
                        } 
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='space-y-6 pt-6 mb-10'>
                    {
                          sortedWishlistBooks.map(book => (
                            <BookCards key={book.bookId} book={book}></BookCards>
                          ))
                        } 
                    </div>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </div>
    );
};


export default ListedBookSection;