import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Elders from './pages/elders';
import Hogs from './pages/hogs';
import Horses from './pages/horses';
import Fighting from './pages/fighting';
import Pigfaced from './pages/pigfaced';
import Pigman from './pages/pigman';
import Sludge from './pages/sludge';
import Misc from './pages/misc';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/elders' element={<Elders/>} />
		<Route path='/fighting' element={<Fighting/>} />
		<Route path='/hogs' element={<Hogs/>} />
		<Route path='/horses' element={<Horses/>} />
    <Route path='/pigfaced' element={<Pigfaced/>} />
    <Route path='/pigman' element={<Pigman/>} />
    <Route path='/sludge' element={<Sludge/>} />
    <Route path='/misc' element={<Misc/>} />
	</Routes>
	</Router>
);
}

export default App;
