import { Routes, Route } from 'react-router-dom'
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createFaLibrary } from './helpers/icons';

createFaLibrary();
function App() {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
			<Route path='home' element={<Home />} />
			<Route path='contact' element={<Contact />} />
		</Routes>
	);
}

export default App;
