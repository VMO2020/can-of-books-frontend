import { useEffect, useState } from 'react';
import axios from 'axios';
// import './Reset.css';
import './App.css';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [data, setData] = useState([]);
	// const [reset, setReset] = useState(false);

	const getBooks = async () => {
		try {
			const URL = `http://localhost:3001/books?${searchQuery}`;
			const res = await axios.get(URL);
			// console.log(res.data);
			setData(res.data);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (event) => {
		// console.log(event.target.value);
		setSearchQuery(event.target.value);
	};

	const handleGetBooks = () => {
		getBooks();
	};

	// const handleReset = () => {
	// 	setReset(false);
	// 	setSearchQuery('');
	// 	getBooks();
	// };

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<div className="App">
			<h1>The Best Books</h1>
			<div className="input">
				<input
					value={searchQuery}
					onChange={handleChange}
					placeholder="Add a query"
				/>

				<button onClick={handleGetBooks}>Get Books</button>
			</div>
			<section className="books-container">
				{data.length > 0 ? (
					data.map((book) => (
						<div key={book._id} className="card-container">
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
					))
				) : (
					<p className="empty">Book collection is empty</p>
				)}
			</section>
		</div>
	);
}

export default App;
