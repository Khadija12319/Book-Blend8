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

    const options = [
        'one', 'two', 'three'
      ];

    useEffect( () => {
        fetch('../../../public/Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    const storedBooks=getStoredBookList();
    // const storedWishList = getStoredWishList();
    const readBookList=[];
    for (const id of storedBooks){
        const book= books.find(book => book.bookId === id);
        if(book){
            readBookList.push(book);
        }
    }
    console.log(readBookList);

    return (
        <div>
            <div>
                <div className='container mx-auto flex items-center justify-center mt-[32px] mb-[56px]'>
                <Dropdown options={options} placeholder="Sort By"  className='w-36'/>
                </div>
                <div className='container mx-auto'>
                <Tabs>
                    <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                    <div>
                        {
                          readBookList.map(book => (
                            <BookCards key={book.bookId} book={book}></BookCards>
                          ))
                        } 
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ListedBookSection;