import React, {useState} from "react";
import {Button, Card, CardBody, Form, FormGroup, Input, Label, Table} from "reactstrap";

const initialState = {
    name: "",
    price: "",
    rating: "",
    userId: 1,
};

export default function Product() {
    const [productState, setProductState] = useState(initialState);

    function onChanged(e) {
        setProductState({...productState, [e.target.name]: e.target.value});
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(productState);
    }

    return (
        <div>
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <Form className="container" onSubmit={submitForm}>
                        <div className="row">
                            <FormGroup className="col">
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={onChanged}
                                    value={productState.name}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className="col">
                                <Label>Price</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    onChange={onChanged}
                                    value={productState.price}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className="col">
                                <Label>Rating</Label>
                                <Input
                                    type="number"
                                    step="0.1"
                                    name="rating"
                                    onChange={onChanged}
                                    value={productState.rating}
                                    required
                                />
                            </FormGroup>
                        </div>
                        <Button type="submit">Add Product</Button>
                    </Form>
                </CardBody>
            </Card>

            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Apple Watch</td>
                    <td>125$</td>
                    <td>4.8</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Samsung TV</td>
                    <td>245$</td>
                    <td>3.8</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};