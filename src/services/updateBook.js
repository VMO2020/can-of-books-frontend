import axios from 'axios';

export const updateBook = async ({ form, id }) => {
	const config = {
		header: {
			'Content-Type': 'application/json',
		},
	};
	try {
		// console.log(form);
		const API = `http://localhost:3001/book/${id}`;
		await axios.put(API, form, config);
	} catch (error) {
		console.log(error);
	}
};
