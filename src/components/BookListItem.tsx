import React from 'react'
import Book from '../types/Book'

interface Props {
    showDetail: (book: Book) => void;
    book: Book
}


export default function BookListItem(props: Props) {
    return (
        <div className="item" onClick={(e) =>
            props.showDetail(props.book)
        } >
            <img className="ui tiny image" alt={props.book.title} src={props.book.thumbnails[0].url} />
            <div className="content" >
                {props.book.title}
            </div>
            <div className="description">
                {props.book.description}
            </div>
            <div className="metadata">

                {props.book.authors.map((author: any, index: any) =>
                    <span key={index}>{author}</span>
                )}
                <br />
                {props.book.isbn}
            </div>
        </div >

    )
}
