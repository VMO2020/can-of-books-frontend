import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { getBooks } from './services/getBooks';
import { deleteBook } from './services/deleteBook';
import { createBook } from './services/createBook';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Book } from './pages/Book';
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
		<BrowserRouter>
			<div className="App">
				<div className="header-container">
					<Link to="/" className="link">
						Home
					</Link>
					<Link to="/about" className="link">
						About
					</Link>
				</div>
				<h1>The Best Books</h1>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								data={data}
								handleDeleteBook={handleDeleteBook}
								handleModal={handleModal}
								handleCreate={handleCreate}
								handleInputChange={handleInputChange}
								form={form}
								showModal={showModal}
							/>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/book/:id" element={<Book data={data} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
