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
    const [err, setErr] = useState(null)
    const [deletedComment, setDeletedComment] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByID(review_id.review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
            setDeletedComment(false)
        }).catch((err) => {
            const msg = err.response.data.msg
            setErr(msg)
            setIsLoading(false)
            setSuccess(false)
        })
    }, [review_id, success, deletedComment])

    const handleChange = (event) => {
        setPostedComment({...postedComment, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(postedComment)
        return postComment(review_id.review_id, postedComment)
        .then(() => {
            console.log(postedComment)
            return setPostedComment(
                {
                    ...defaultComment,
                },
                setSuccess(true),
            )
        })
        .catch((err) => {
            console.log(err)
        })
    };
    if (isLoading) return <div>Loading...</div>
    return (
        <>
        <div className="comment-div" key={comments.comment_id}>{comments.map((comment) => {
            return (
                <section className="comment-section" key={comments.comment_id}>
                    <div className="single-comment">{comment.author}</div>
                    {user === comment.author && <button onClick={() => {
                        deleteComment(comment.comment_id)
                        setDeletedComment(true)
                    }}>Delete comment</button>}
                    <div>{comment.body}</div>
                    <div>{comment.created_at}</div>
                </section>
            )
        })} </div>
        {success && (
            <div>
                comment added successfully!
            </div>
        )}
        {!success && (<form onSubmit={handleSubmit} className="comment-form">
            <p> Add a comment below!</p>
            <label>
                Commenting as: {user}
            </label>
            {/* <input type="text" className="form-item" id="username" placeholder="username" name="username" onChange={handleChange}>
            </input> */}
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