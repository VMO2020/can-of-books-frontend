import axios from 'axios';

export const createBook = async (form) => {
	const config = {
		header: {
			'Content-Type': 'application/json',
		},
	};
	try {
		// console.log(form);
		const API = `http://localhost:3001/book/`;
		await axios.post(API, form, config);
	} catch (error) {
		console.log(error);
	}
};
