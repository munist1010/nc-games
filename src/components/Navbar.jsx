import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<h1 className="header">nc_games reviews</h1>
			<div className="icons">
				<img src="https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg" className="logo">
				</img>
				<Link to="/" className="link">Home</Link>
				<Link to="/reviews" className="link">Reviews</Link>
				<Link to="/users" className="link">Users</Link>
				<Link to="/signin" className="link">Log in</Link>
			</div>
		</nav>
	);
}
