import React, {useState} from "react";

export default function Category() {
    const [currentCategories, setCategories] = useState(init());
    return (
        currentCategories.map((cat) =>
            <div>
                <h2>Id : {cat.id}</h2>
                <span>Name:</span> {cat.name}
                <span>Products: </span> {cat.products.map((prod) =>
                <div>
                    <h3>Id : {prod.id}</h3>
                    Name: {prod.name}
                    Price: {prod.price}
                    Rating: {prod.rating}
                </div>
            )}
            </div>
        ));
}



function init() {
    return [
        {
            "id": 1,
            "name": "category1",
            "products": [
                {
                    "id": 1,
                    "name": "Iphone",
                    "price": 100.00,
                    "rating": 4.3
                },
                {
                    "id": 2,
                    "name": "Ipad",
                    "price": 150.00,
                    "rating": 4.8
                }
            ]
        },
        {
            "id": 2,
            "name": "category2",
            "products": [
                {
                    "id": 3,
                    "name": "Imac",
                    "price": 200.00,
                    "rating": 3
                },
            ]
        }
    ]
}