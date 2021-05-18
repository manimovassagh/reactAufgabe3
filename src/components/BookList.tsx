import React from 'react';
import Books from '../shared/Books';
import Book from '../types/Book';
import BookListItem from './BookListItem'

interface Props {
    showDetail: (book: Book) => void;
}


export default function BookList(props: Props) {

    return (

        <div className="ui middle aligned selection divided list">
            {Books.map((book) =>
                <BookListItem key={book.isbn} book={book} showDetail={props.showDetail} />
            )}

        </div>
    )
}
