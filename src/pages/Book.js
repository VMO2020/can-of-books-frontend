import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBook } from '../services/getBook';

export const Book = () => {
	const [data, setData] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		getBook({ setData, id });
		// console.log(id);
	}, []);

	return (
		<>
			{data[0] && (
				<div className="card-container">
					<div className="image-container">
						<img src={data[0].image} alt={data[0].title} />
					</div>
					<div className="text-container">
						<p>id:{data[0]._id}</p>
						<h2>Title:{data[0].title}</h2>
						<p>Description:{data[0].description}</p>
						<p>£{data[0].price}</p>
						<a href={data[0].link} target="_blank" rel="noreferrer">
							{data[0].link}
						</a>
					</div>
				</div>
			)}
		</>
	);
};

// http://localhost:3000/book/64625541980584ba2dd337ee
