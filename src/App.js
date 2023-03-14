import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Reviews from "./components/Reviews"
import Users from "./components/Users";
import SignIn from "./components/SignIn";
function App() {
	return (
		<Router>
    <div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/reviews" element={<Reviews />}></Route>
				<Route path="/users" element={<Users />}></Route>
				<Route path="/signin" element={<SignIn />}></Route>
			</Routes>
    </div>
		</Router>
	);
}

export default App;
