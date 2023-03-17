import { Link } from "react-router-dom"
export default function ErrorPath() {
    return (
        <div>
            <div>
                This is an error path!!! click <Link to="/"><p>here</p></Link> to go home!!
            </div>
        </div>
    )
}