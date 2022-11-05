import React from "react";
import { Route, Routes, BrowserRouter }
		from 'react-router-dom'
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
return (
	<BrowserRouter>
	<Routes>
	        <Route path='*' element={ <PageNotFound />} />
		<Route path="/" element={<Home />} />
		
	</Routes>
	</BrowserRouter>
);
}

export default App;
