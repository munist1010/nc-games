import { fetchCategories } from "../utils/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Categories() {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchCategories().then((data) => {
            setCategories(data)
            setIsLoading(false)
        })
    }, [categories])
    
    return (
        <div>
            {categories && categories.map((category) => {
                return (
                    <Link to={`/categories/${category.slug}`}>
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