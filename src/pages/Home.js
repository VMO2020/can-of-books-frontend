import React from 'react';
import { Book } from '../components/book/Book';
import { Modal } from '../components/modal/Modal';

export const Home = ({
	data,
	handleDeleteBook,
	form,
	showModal,
	handleModal,
	handleCreate,
	handleInputChange,
}) => {
	return (
		<>
			<button onClick={handleModal}>Add a new book</button>
			{showModal && (
				<Modal
					handleModal={handleModal}
					handleCreate={handleCreate}
					handleInputChange={handleInputChange}
					form={form}
				/>
			)}
			<section className="books-container">
				{data.length > 0 ? (
					data.map((book) => (
						<Book
							book={book}
							key={book._id}
							handleDeleteBook={handleDeleteBook}
						/>
					))
				) : (
					<p className="empty">Book collection is empty</p>
				)}
			</section>
		</>
	);
};
