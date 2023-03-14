import { fetchReviewsByID, fetchCommentsByID } from "../utils/api"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard";

export default function SingleReview() {
    let {review_id} = useParams();
    const [singleReview, setSingleReview] = useState([])
    const [comments, setComments] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		fetchReviewsByID(review_id).then((data) => {
			setSingleReview(data)
			setIsLoading(false)
		})
        fetchCommentsByID(review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
	}, [review_id])
    console.log(singleReview)
    if (isLoading) return <h1>Loading...</h1>
    return (
        <div className="review">
            <h1>
                {singleReview.title} by {singleReview.designer}
            </h1>
            <h3>
            author:{singleReview.owner} -
            category: {singleReview.category}
            </h3>
            <img alt="game" src={singleReview.review_img_url}></img>
            <p> {singleReview.review_body}</p>
            <p>Review created at {singleReview.created_at} with {singleReview.votes} votes and {singleReview.comment_count} comments</p>
            <section>
                <CommentCard comments={comments}/>
            </section>
        </div>
    )
}