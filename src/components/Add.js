import React, { useState } from 'react';
import { TabTitle } from './GeneralFunctions';
import ResultCard from './ResultCard';

const Add = () => {
	TabTitle('Search');
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	function onChange(e) {
		setQuery(e.target.value);

		fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
			.then((res) => res.json())
			.then((data) => {
				if (!data.errors) {
					setResults(data.results);
				} else {
					setResults([]); //Şart değil
				}
			});
	}

	return (
		<div className='add-page'>
			<div className='container'>
				<div className='add-content'>
					<img src='https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg' alt='' />
					<div className='titles'>
						<h1>Hoş Geldiniz.</h1>
						<h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
					</div>
					<div className='input-wrapper'>
						<input type='text' value={query} onChange={onChange} placeholder='Film, dizi, kişi ara...' />
					</div>
					{results.length > 0 && (
						<ul className='results'>
							{results.map((movie) => (
								<li key={movie.id}>
									<ResultCard movie={movie} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Add;
