import { fetchReviews } from "../utils/api";
import { useState, useEffect } from "react"
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom"
export default function Reviews() {
	let {category_name}= useParams()
	console.log(category_name)
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		fetchReviews(category_name).then((data) => {
			setReviews(data)
			setIsLoading(false)
		})
	}, [category_name])
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div className="review-list">
			{reviews && reviews.map((review) => {
				return (
					<ReviewCard review={review} key={review.review_id}/>
				)
			})}
		</div>
	);
}
