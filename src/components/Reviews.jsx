import { fetchReviews } from "../utils/api";
import { useState, useEffect } from "react"
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Reviews() {
	let {category_name}= useParams()
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [sortBy, setSortBy] = useState("title")
	const [order, setOrder] = useState("asc")
	const [isErr, setIsErr] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		fetchReviews(category_name, sortBy, order).then((data) => {
			setReviews(data)
			setIsLoading(false)
			if (data.length === 0) {
				setIsErr(true)
			}
		}).catch((err) => {
			setIsLoading(false)	
			setIsErr(true);
		})
	}, [category_name, sortBy, order])
	if (isLoading) return <h1>Loading...</h1>
	if (isErr) return <p> Page not found! Click <Link to="/"><p>here</p></Link> to return home</p>
	return (
		<>

		<div className="asc-desc">
		<select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select-list">
			<option value="owner">Owner</option>
			<option value="title">Title</option>
			<option value="created_at">Creation Date</option>
			<option value="designer">Game Designer</option>
			<option value="votes">Votes</option>
			<option value="comment_count">Comment count</option>
		</select>
			<button onClick={() => {setOrder("asc")}}>Ascending</button>
			<button onClick={() => {setOrder("desc")}}>Descending</button>
		</div>
		<div className="review-list">
		<br></br>
			{reviews && reviews.map((review) => {
				return (
					<ReviewCard review={review} key={review.review_id}/>
				)
			})}
		</div>
		</>
	);
}
