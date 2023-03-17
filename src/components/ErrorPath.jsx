import { Link } from "react-router-dom"
export default function ErrorPath() {
    return (
        <div>
            <div>
                Page not found!!! click <Link to="/"><p>here</p></Link> to go home!!
            </div>
        </div>
    )
}