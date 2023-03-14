import { useEffect, useState } from "react"
import { fetchCommentsByID } from "../utils/api"
export default function CommentCard(review_id) {
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByID(review_id.review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [review_id])
    if (isLoading) return <div>Loading...</div>
    return (
        <div className="comment-div" key={comments.comment_id}>{comments.map((comment) => {
            return (
                <section className="comment-section" key={comments.comment_id}>
                    <div className="single-comment">{comment.author}</div>
                    <div>{comment.body}</div>
                    <div>{comment.created_at}</div>
                </section>
            )
        })} </div>
        
    )
}