import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './lib/fontawesome/css/all.min.css';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/Watchlist';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<WatchList />} />
					<Route path='/watched' title='Watched' element={<Watched />} />
					<Route path='/add' title='Add' element={<Add />} />
				</Routes>
			</Router>
		</GlobalProvider>
	);
}

export default App;
