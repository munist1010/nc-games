export default function CommentCard(props) {
    
    return (
        <div className="comment-div">{props.comments.map((comment) => {
            return (
                <section className="comment-section">
                    <div className="single-comment">{comment.author}</div>
                    <div>{comment.body}</div>
                    <div>{comment.created_at}</div>
                </section>
            )
        })} </div>
        
    )
}