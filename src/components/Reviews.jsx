import { fetchReviews } from "../utils/api";
import { useState, useEffect } from "react"
import ReviewCard from "./ReviewCard";
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
					<ReviewCard review={review}/>
				)
			})}
		</div>
	);
}
