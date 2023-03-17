import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Reviews from "./components/Reviews"
import SingleReview from "./components/SingleReview";
import Categories from "./components/Categories"
import ErrorPath from "./components/ErrorPath";

function App() {
	return (
		<Router>
    <div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/reviews" element={<Reviews />}></Route>
				<Route path="/reviews/:review_id" element={<SingleReview />}></Route>
				<Route path="/categories" element={<Categories />}></Route>
				<Route path="/categories/:category_name" element={<Reviews />}></Route>
				<Route path="*" element={<ErrorPath />}></Route>		
				<Route path="/reviews/*" element={<ErrorPath />}></Route>	
			</Routes>
    </div>
		</Router>
	);
}

export default App;
