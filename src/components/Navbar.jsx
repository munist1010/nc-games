import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<h1>nc_games reviews</h1>
			<div className="Links">
				<Link to="/">Home</Link>
				<Link to="/reviews">Reviews</Link>
				<Link to="/users">Users</Link>
				<Link to="/signin">Log in</Link>
				<Link to="/">Logo</Link>
			</div>
		</nav>
	);
}
