import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TabTitle } from './GeneralFunctions';
import MovieCard from './MovieCard';

const WatchList = () => {
	TabTitle('Watch List');
	const { watchlist } = useContext(GlobalContext);
	return (
		<div>
			<div className='movie-page'>
				<div className='container'>
					<div className='header'>
						<h1 className='heading'>İzlenecek Filmler & Diziler</h1>
						<div className='count-pill'>
							{watchlist.length} {watchlist.length < 2 ? 'Movie' : 'Movies'}
						</div>
					</div>
					{watchlist.length > 0 ? (
						<div className='movie-grid'>
							{watchlist.map((movie) => (
								<MovieCard movie={movie} key={movie.id} type='watchlist' />
							))}
						</div>
					) : (
						<h2 className='no-movies'>İzlenecek listenizde film, dizi, kişi yok...</h2>
					)}
				</div>
			</div>
		</div>
	);
};

export default WatchList;
