import { useEffect, useState } from 'react';
import { API_BASE } from './constants/api';
import { API_KEY } from './constants/api-key';

function App() {
	const [price, setPrice] = useState([]);

	useEffect(() => {
		fetch(API_BASE, {
			headers:{
				'Authorization' : API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setPrice(data);
				console.log(data)
			});
	});
	return <div></div>;
}

export default App;