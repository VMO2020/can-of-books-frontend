import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Book } from './components/Book';
import { getBooks } from './getBooks';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [data, setData] = useState([]);

	const handleChange = (event) => {
		// console.log(event.target.value);
		setSearchQuery(event.target.value);
	};

	const handleGetBooks = () => {
		getBooks({ setData, searchQuery });
	};

	useEffect(() => {
		getBooks({ setData, searchQuery });
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
					data.map((book) => <Book book={book} key={book._id} />)
				) : (
					<p className="empty">Book collection is empty</p>
				)}
			</section>
		</div>
	);
}

export default App;
