import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TabTitle } from './GeneralFunctions';
import MovieCard from './MovieCard';

const Watched = () => {
	TabTitle('Watched');
	const { watched } = useContext(GlobalContext);
	return (
		<div>
			<div className='movie-page'>
				<div className='container'>
					<div className='header'>
						<h1 className='heading'>İzlenen Filmler & Diziler</h1>
						<div className='count-pill'>
							{watched.length} {watched.length < 2 ? 'Movie' : 'Movies'}
						</div>
					</div>

					{watched.length > 0 ? (
						<div className='movie-grid'>
							{watched.map((movie) => (
								<MovieCard movie={movie} key={movie.id} type='watched' />
							))}
						</div>
					) : (
						<h2 className='no-movies'>İzlenen listenizde film, dizi, kişi yok...</h2>
					)}
				</div>
			</div>
		</div>
	);
};

export default Watched;
