import { fetchReviews } from "../utils/api";
import { useState, useEffect } from "react"
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom"
export default function Reviews() {
	let {category_name}= useParams()
	console.log(category_name)
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [sortBy, setSortBy] = useState("title")
	useEffect(() => {
		setIsLoading(true)
		fetchReviews(category_name, sortBy).then((data) => {
			setReviews(data)
			setIsLoading(false)
		})
	}, [category_name, sortBy])
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div className="review-list">
		<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
			<option value="owner">Owner</option>
			<option value="title">Title</option>
			<option value="created_at">Creation Date</option>
			<option value="designer">Game Designer</option>
			<option value="votes">Votes</option>
			<option value="comment_count">Comment count</option>

		</select>
			{reviews && reviews.map((review) => {
				return (
					<ReviewCard review={review} key={review.review_id}/>
				)
			})}
		</div>
	);
}
