import { useEffect, useState } from "react"
import { fetchCommentsByID } from "../utils/api"
export default function CommentCard(review_id) {
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [err, setErr] = useState(null)
    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByID(review_id.review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
        }).catch((err) => {
            const msg = err.response.data.msg
            setErr(msg)
            setIsLoading(false)
        })
    }, [review_id])
    if (isLoading) return <div>Loading...</div>
    if (err) return <div>No comments found!!</div>
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