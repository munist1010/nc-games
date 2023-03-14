import {Link} from "react-router-dom"

export default function ReviewCard(props) {
    const URL = "/reviews/" + props.review.review_id
    return (
        <Link to={URL}>
        <section key={props.review.review_id} className="review-card">
            <img alt="" src={props.review.review_img_url}></img>
			<p>{props.review.title}</p>
		</section>
        </Link>
    )
}