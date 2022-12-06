import React,{useState,createContext} from 'react';
import './App.css';
import Navbar from './Healthcare/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Healthcare/pages/Home';
import About from './Healthcare/pages/About';
import GeneralInfo from './Healthcare/pages/GeneralInfo';
import BookAppointment from './Healthcare/pages/BookAppointment';
import FAQ from './Healthcare/pages/FAQ/FAQ';
import Contact from './Healthcare/pages/Contact';
import PolicyDetails from './Healthcare/pages/PolicyDetails';
import Feedback from './Healthcare/pages/Feedback';
export const UserContext = createContext(' ');



function App() {
	const [isValueFilled, setisValueFilled] = useState(false);

	const value = {
		isValueFilled,setisValueFilled
	  }

return (
	<UserContext.Provider value={value}    >
	<Router>
	<Navbar />
	<Routes>
		<Route path='/'  element={<About />} />
		<Route path='/about' element={<About/>} />
		<Route path='/checkups' element={<GeneralInfo/>} />
		<Route path='/book' element={<BookAppointment/>} />
		<Route path='/faq' element={<FAQ/>} />
		<Route path='/contactUs' element={<Contact/>} />
		<Route path='/details' element={<PolicyDetails/>} />
		<Route path='/feedBack' element={<Feedback/>} />

	</Routes>
	</Router>
	</UserContext.Provider>

);
}

export default App;
