import { useKeycloak } from "@react-keycloak/web"

export default function Product(props) {
    const product = props.product
    return (
        <div className="card" style={{width: "18rem"}}>
            <h5>Name: {product.name}</h5>
            <div>Price: {product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Category: {product.category.name}</div>
        </div>
    )
}