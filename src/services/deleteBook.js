import axios from 'axios';

export const deleteBook = async (id) => {
	try {
		// console.log(id);
		const API = `http://localhost:3001/book/${id}`;
		await axios.delete(API);
	} catch (error) {
		console.log(error);
	}
};
