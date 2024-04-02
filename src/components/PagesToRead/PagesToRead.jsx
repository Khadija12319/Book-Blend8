import {ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {getStoredBookList} from '../../Utility/Localstorage'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
// import { data } from 'autoprefixer';
const PagesToRead = () => {
    const getStoredBooks= getStoredBookList();

    const [books,setBooks] =useState([]);

    useEffect(() =>{ 
        fetch('./Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))} ,[])
        
    console.log(getStoredBooks);
    const getData=[];

    for( const id of getStoredBooks){
        const book = books.find(book => book.bookId === id);
        if(book){
            getData.push(book);
        }
    }
    const updatedData = [];
    getData.forEach((data, index) => {
    updatedData[index] = {
        ...data,
        totalPages: data.totalPages,
        bookName: data.bookName
    };
    });
    console.log(updatedData);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
   
   
    return (
        <div className='container mx-auto w-full flex justify-center bg-[#13131305] lg:p-20 rounded-3xl mb-20'>
            <Helmet>
                <title>Book Blend | Pages to Read</title>
            </Helmet>
            <ResponsiveContainer width="100%" height={700}>
                <BarChart
                    data={updatedData}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 0,
                        bottom: 35,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <Tooltip/>
                    <YAxis tickCount={7}/>
                    <Bar dataKey='totalPages' fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {updatedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


PagesToRead.propTypes ={
    props: PropTypes.object,
    height:PropTypes.number,
    width:PropTypes.number,
    fill: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
}
export default PagesToRead;