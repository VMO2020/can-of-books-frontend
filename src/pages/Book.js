import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBook } from '../services/getBook';
import { updateBook } from '../services/updateBook';

export const Book = () => {
	const [data, setData] = useState([]);
	const [form, setForm] = useState({
		title: '',
		description: '',
		author: '',
		price: '',
		link: '',
		image: '',
		status: true,
	});

	const { id } = useParams();

	const handleInputChange = (event) => {
		// setForm({ ...form, [event.target.name]: event.target.value });
		const { name, value } = event.target;

		if (name === 'price') {
			setForm({ ...form, [name]: parseFloat(value) });
		} else if (name === 'status') {
			setForm({ ...form, [name]: value === 'true' });
		} else {
			setForm({ ...form, [name]: value });
		}
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		// console.log(form);
		updateBook({ form, id });
	};

	useEffect(() => {
		getBook({ setData, setForm, id });
	}, []);

	return (
		<>
			<h2>Update a Book</h2>
			{data[0] && (
				<div className="card-container">
					<div className="image-container">
						<img src={data[0].image} alt={data[0].title} />
					</div>
					<div className="text-container-update">
						<p>id:{data[0]._id}</p>
						<form onSubmit={handleUpdate}>
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
						</form>
					</div>
				</div>
			)}
		</>
	);
};

// http://localhost:3000/book/64625541980584ba2dd337ee
