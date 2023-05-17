import React from 'react';
import './Modal.css';

export const Modal = ({
	handleCreate,
	handleInputChange,
	handleModal,
	form,
}) => {
	return (
		<div className="modal">
			<form onSubmit={handleCreate}>
				<h2>Add a new book</h2>
				<label>Title:</label>
				<input
					name="title"
					placeholder="Title"
					onChange={handleInputChange}
					value={form.title}
				/>
				<label>Description:</label>
				<textarea
					name="description"
					placeholder="Description"
					onChange={handleInputChange}
					value={form.description}
				/>
				<label>Author:</label>
				<input
					name="author"
					placeholder="Author"
					onChange={handleInputChange}
					value={form.author}
				/>
				<label>Price:</label>
				<input
					name="price"
					type="number"
					placeholder="Price £"
					onChange={handleInputChange}
					value={form.price}
				/>
				<label>Book link:</label>
				<input
					name="link"
					placeholder="Product link"
					onChange={handleInputChange}
					value={form.link}
				/>
				<label>Image link:</label>
				<input
					name="image"
					placeholder="Image link"
					onChange={handleInputChange}
					value={form.image}
				/>
				<label>Status (true/false):</label>
				<input
					name="status"
					placeholder="Status true/false"
					onChange={handleInputChange}
					value={form.status}
				/>
				<input type="submit" className="submit" />
				<p className="close" onClick={handleModal}>
					X
				</p>
			</form>
		</div>
	);
};
