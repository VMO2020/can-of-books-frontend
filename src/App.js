import { useEffect, useState } from 'react';
import { Book } from './components/Book';
import { getBooks } from './services/getBooks';
import { deleteBook } from './services/deleteBook';
import { createBook } from './services/createBook';
import { Modal } from './components/modal/Modal';
import './App.css';

const initialForm = {
	title: '',
	description: '',
	author: '',
	price: '',
	link: '',
	image: '',
	status: true,
};

function App() {
	const [data, setData] = useState([]);
	const [form, setForm] = useState(initialForm);
	const [showModal, setShowModal] = useState(false);

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

	const handleCreate = (event) => {
		event.preventDefault();
		createBook(form);
		// console.log(form);
		setForm(initialForm);
		setShowModal(false);
	};

	const handleDeleteBook = (id) => {
		deleteBook(id);
		getBooks({ setData });
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		getBooks({ setData });
	}, [data]);

	return (
		<div className="App">
			<h1>The Best Books</h1>
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
		</div>
	);
}

export default App;
