import axios from 'axios';

export const getBook = async ({ setData, setForm, id }) => {
	try {
		const bookId = id || '64625541980584ba2dd337ee';
		const API = `http://localhost:3001/book?_id=${bookId}`;
		const res = await axios.get(API);
		// console.log(res.data);
		setData(res.data);
		const form = res.data[0];
		// console.log(form);
		setForm(form);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// 64624f85a14d8db0a5e45148
// 64625541980584ba2dd337ee
