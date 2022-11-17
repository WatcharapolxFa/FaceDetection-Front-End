import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={Login} />
				<Route path='/login' element={Login} />
				<Route path='/register' element={Register} />
				<Route path='/home' element={Home} />
				<Route path='/contact' element={Contact} />
			</Routes>
		</Router>
	);
}

export default App;
