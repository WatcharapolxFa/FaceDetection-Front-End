import React from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from'./pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
return (
	<Router>
	{/* <Navbar /> */}
	<Routes>
		<Route path='/' exact component={Login} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
    <Route path='/home' component={Home} />
    <Route path='/contact' exact component={Contact} />
	</Routes>
	</Router>
);
}

export default App;
