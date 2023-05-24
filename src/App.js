import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getBooks } from './services/getBooks';
import { createBook } from './services/createBook';
import { deleteBook } from './services/deleteBook';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Book } from './pages/Book';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

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

	const handleCreate = async (event) => {
		event.preventDefault();
		await createBook(form);
		// console.log(form);
		setForm(initialForm);
		setShowModal(false);
		getBooks({ setData });
	};

	const handleDeleteBook = async (id) => {
		await deleteBook(id);
		getBooks({ setData });
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		getBooks({ setData });
	}, []);

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
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
			<Footer />
		</BrowserRouter>
	);
}

export default App;
