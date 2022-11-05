import React from "react";
import { Route, Routes, BrowserRouter }
		from 'react-router-dom'
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
return (
	<BrowserRouter>
	<Routes>
		<Route exact path='/' component={Home} />
		<Route path="*" component={PageNotFound} />
	</Routes>
	</BrowserRouter>
);
}

export default App;
