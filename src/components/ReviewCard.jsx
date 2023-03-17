import {Link} from "react-router-dom"

export default function ReviewCard(props) {
    const URL = "/reviews/" + props.review.review_id
    return (
        <Link to={URL} className="card">
        <section key={props.review.review_id} className="review-card">
            <img alt="" src={props.review.review_img_url}></img>
			<p>{props.review.title}</p>
            {/* <p>{props.review.category}</p> */}
		</section>
        </Link>
    )
}