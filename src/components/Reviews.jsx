import { fetchReviews } from "./api";
import { useState, useEffect } from "react"
export default function Reviews() {
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		fetchReviews().then((data) => {
			setReviews(data)
			setIsLoading(false)
		})
	}, [])
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div className="review-list">
			{reviews && reviews.map((review) => {
				return (
					<p key={review.review_id}>{review.title}</p>
				)
			})}
		</div>
	);
}
