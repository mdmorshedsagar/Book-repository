import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books} = useLoaderData();
    
    return (
        <div className='my-container my-4'>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
              {
                books.map(book => <Book book={book} key={book.isbn13 }></Book>)
              }
            </div>
           
        </div>
    );
};

export default Books;