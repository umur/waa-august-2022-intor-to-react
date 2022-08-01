import React from "react";

function ProductRow ({index, name, price, updateItem, deleteItem}) {

    function onUpdate() {
        updateItem(index, 'price', 1100);
    }

    function onDelete() {
        deleteItem(index);
    }

    return (
        <tr>
            <td>{name}</td>
            <td role={'currency'}>{price}</td>
            <td>
                <button onClick={() => onUpdate()}>Update</button>
                <button role={'delete'} onClick={() => onDelete()}>Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow;