
const { Link } = ReactRouterDOM

export function BookPreview({ book, onRemoveBook }) {

    function currencyToSymbol(cur) {
        switch (cur) {
            case "USD":
                return "$"
                break
            case "EUR":
                return "€"
                break
            case "ILS":
                return "₪"
                break
        }
    }

    return (

        <article className="book-card">
            <Link to={`/books/${book.id}`}>
            <img
                className="book-card-img"
                src={book.thumbnail}
                alt={book.title}
            />
            </Link>
            <div className="book-card-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="info-line book-authors">
                    <span>By:</span>
                    <span>{book.authors}</span>
                </p>
                <p className="info-line book-price">
                    <span>Price:</span>
                    <span> {book.listPrice.amount} {currencyToSymbol(book.listPrice.currencyCode)}</span>
                </p>
            </div>
            <button><Link to={`/books/${book.id}`}>Select</Link></button>
            <button onClick={() => onRemoveBook(book.id)}>Delete</button>
        </article>
    )
}