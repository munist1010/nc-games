import { useEffect, useState } from "react"
import { fetchCommentsByID } from "../utils/api"
import { postComment } from "../utils/api"
import { deleteComment } from "../utils/api"




export default function CommentCard(review_id) {
    const user = "cooljmessy"
    const defaultComment = {
        username: "cooljmessy",
        body: "",
    }
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [postedComment, setPostedComment] = useState(defaultComment)
    const [success, setSuccess] = useState(false);
    const [deletedComment, setDeletedComment] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByID(review_id.review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
            setSuccess(false)
        })
    }, [review_id, success, deletedComment])

    const handleChange = (event) => {
        setPostedComment({...postedComment, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        return postComment(review_id.review_id, postedComment)
        .then(() => {
            return setPostedComment(
                {
                    ...defaultComment,
                },
                setSuccess(true),
            )
        })
    };
    if (isLoading) return <div>Loading...</div>
    if (deletedComment) return <div> Comment deleted!</div>
    return (
        <>
        <div className="comment-div" key={comments.comment_id}>{comments.map((comment) => {
            return (
                <section className="comment-section" key={comments.comment_id}>
                    <div className="single-comment">{comment.author}</div>
                    {user === comment.author && <button onClick={() => {
                        deleteComment(comment.comment_id)
                        setDeletedComment(true)
                        setSuccess(false)
                    }}>Delete comment</button>}
                    <div>{comment.body}</div>
                    <div>{comment.created_at}</div>
                </section>
            )
        })} </div>
            <div>
                {success &&  (
                <div>
                    comment added successfully!
                </div>)}
                {deletedComment && (
                <div>
                    comment delete successfully!
                </div>)}
            </div>
                
        {!success && (<form onSubmit={handleSubmit} className="comment-form">
            <p> Add a comment below!</p>
            <label>
                Commenting as: {user}
            </label>
            <label>
                Comment body
            </label>
            <input type="text" className="form-item" id="body" placeholder="Comment body" name="body" onChange={handleChange}>
            </input>
            <button type="submit">
                Submit
            </button>
        </form>)}
        </>
        
    )
}