import React from 'react'
import Book from '../types/Book'
import _ from 'lodash'

interface Props {
    showList: () => void;
    book: Book;
}

export default function BookDetails(props: Props) {
    // console.log(props)
    const getRatings = (): number[] => {
        const ratingArray = []
        for (let i = 0; i < (props.book.rating || 0); i++) { ratingArray.push(i) }
        return ratingArray
    }

    return (
        <>
            <div>
                <h1>{props.book.title}</h1>
                <div className="ui divider"></div>
                <div className="ui grid">
                    <div className="four wide column">
                        <h4>Autoren</h4>
                        {props.book.authors.map((author) =>
                            <div key={author}>{author}</div>
                        )}
                    </div>
                    <div className="four wide column">
                        <h4>ISBN</h4>
                        {props.book.isbn}
                    </div>
                    <div className="four wide column">
                        <h4>Erschienen</h4>
                        <p>
                            {props.book.published.toLocaleDateString()}
                        </p>
                    </div>
                    <div className="four wide column">
                        <h4>Rating</h4>
                        {_.fill(getRatings(), <i className="yellow star icon" />)}
                    </div>
                </div>
                <h4>Beschreibung</h4>
                {props.book.description}
                <div className="ui small images">
                    jedes BOOK_THUMBNAIL jeweils zu einem img Element mappen
                    {props.book.thumbnails.map((thumbnail) =>
                    <img src={thumbnail.url} alt={thumbnail.title} key={thumbnail.title} />
                )}
                </div>
            </div>
            {/* Zurueck BUTTON, bei 'onClick' 'props.showListEvent' rufen */}

            <button onClick={() => props.showList()} className="ui violet button">Back to Home</button>
        </>
    )
}
