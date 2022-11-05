import React from "react";
import { Route, Routes, BrowserRouter }
		from 'react-router-dom'
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
return (
	<BrowserRouter>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path="*" element={ <PageNotFound />} />
	</Routes>
	</BrowserRouter>
);
}

export default App;
