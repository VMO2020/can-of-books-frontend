import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Book = ({ book, handleDeleteBook, handleUpdateBook }) => {
	const [update, setUpdate] = useState(false);

	const handleToggle = () => {
		setUpdate(!update);
	};

	return (
		<div>
			{!update ? (
				<div className="card-container">
					<div className="image-container">
						<img src={book.image} alt={book.title} />
					</div>
					<div className="text-container">
						<h2>{book.title}</h2>
						<h3>{book.author}</h3>
						<p>{book.description}</p>
						<p>£{book.price}</p>
						<a href={book.link} target="_blank" rel="noreferrer">
							{book.link}
						</a>
						<button
							className="delete"
							onClick={() => {
								handleDeleteBook(book._id);
							}}
						>
							Delete
						</button>
						<button className="update" onClick={handleToggle}>
							Update
						</button>
						<Link to={`/book/${book._id}`} className="card-link">
							Book
						</Link>
					</div>
				</div>
			) : (
				<div>Update</div>
			)}
		</div>
	);
};
