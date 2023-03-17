import { fetchCategories } from "../utils/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Categories() {
    const [categories, setCategories] = useState([])
    const [isErr, setIsErr] = useState(false)
    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data)
        }).catch((err) => {
            console.log(err)
            setIsErr(true)
        })
    }, [categories, isErr])

    if (isErr) return <div> Path not found! <Link to="/">Click here to go home</Link></div>
    return (
        <div key={categories.category_id}>
            {categories && categories.map((category) => {
                return (
                    <Link to={`/categories/${category.slug}`} key={category.description}>
                    <section key={category.slug}>
                    <p>{category.slug}</p>
                    <p>{category.description}</p>
                    </section>
                    </Link>
                )
            })}
        </div>
    )
}