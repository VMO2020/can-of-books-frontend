import axios from 'axios';

export const getBooks = async ({ setData }) => {
	try {
		const API = `http://localhost:3001/books`;
		const res = await axios.get(API);
		// console.log(res.data);
		setData(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
