import { fetchCategories } from "../utils/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data)
        })
    }, [categories])

    return (
        <div>
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