import React, {useState} from 'react';
import ProductRow from "./ProductRow";
import axios from "axios";

function Product() {
    const [items, setItems] = useState([]);

    const getItems = () => {
        // setItems([{name: 'iPad', price: 1200}, {name: 'iPhone', price: 999}, {name: 'Macbook Pro', price: 2200}])
        axios.get('api/products', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(res => {
            setItems(res.data);
        }).catch(err => {
        });
    }

    // change item value by property with corresponding index
    const updateItem = (index, property, value) => {
        const copy = [...items];
        copy[index][property] = value;
        setItems(copy);
    }

    // delete item with corresponding index
    const deleteItem = (index) => {
        const copy = [...items];
        copy.splice(index, 1)
        setItems(copy);
    }


    React.useEffect(() => {
        getItems();
    }, [])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, index) => {
                        return (
                            <ProductRow key={index}
                                        index={index}
                                        name={item.name}
                                        price={item.price}
                                        updateItem={updateItem}
                                        deleteItem={deleteItem}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Product;