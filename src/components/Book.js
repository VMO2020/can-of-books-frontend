import React from 'react';

export const Book = ({ book }) => {
	return (
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
			</div>
		</div>
	);
};
