import { fetchReviewsByID } from "../utils/api"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard";
import { voteForReview } from "../utils/api";

export default function SingleReview() {
    let {review_id} = useParams();
    const [singleReview, setSingleReview] = useState([])
	const [isLoading, setIsLoading] = useState(false)
    const [reviewVotes, setReviewVotes] = useState(0)
    const [isVotingErr, setIsVotingErr] = useState(false)
    useEffect(() => {
		setIsLoading(true)
		fetchReviewsByID(review_id).then((data) => {
			setSingleReview(data)
			setIsLoading(false)
		})
	}, [review_id])
    
    // may need to take out vote component into seperate file
    const handleUpvoteButtonClick = () => {
        setIsVotingErr(false);
        setReviewVotes(1);
        voteForReview(singleReview.review_id, +1).catch(() => {
            setReviewVotes(0)
            setIsVotingErr(true);
        })
    }

    const handleDownvoteButtonClick = () => {
        setIsVotingErr(false);
        setReviewVotes(1);
        voteForReview(singleReview.review_id, -1).catch(() => {
            setReviewVotes(0)
            setIsVotingErr(true);
        })
    }
    
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
            <p>Review created at {singleReview.created_at} with {singleReview.votes + reviewVotes} votes and {singleReview.comment_count} comments</p>
            <button onClick={handleUpvoteButtonClick} disabled={reviewVotes !== 0}>upvote</button>
            <button onClick={handleDownvoteButtonClick} disabled={reviewVotes !== 0}>downvote</button>
            {isVotingErr && <p>Vote failed!</p>}
            <section>
                <CommentCard review_id={review_id}/>
            </section>
        </div>
    )
}