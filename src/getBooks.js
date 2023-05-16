import axios from 'axios';

export const getBooks = async ({ setData, searchQuery }) => {
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
