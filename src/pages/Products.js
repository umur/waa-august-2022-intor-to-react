import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";

const initialState = {
  name: "",
  price: "",
  rating: "",
  user_id: 1,
};

const Products = () => {
  const [formState, setFormState] = useState(initialState);
  const [products, setProducts] = useState([]);
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    setProducts([...products, formState]);
    e.preventDefault();
    setFormState(initialState);
  }

  return (
    <div>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <Form className="container" onSubmit={handleSubmit}>
            <div className="row">
              <FormGroup className="col">
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  required
                />
              </FormGroup>
              <FormGroup className="col">
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={formState.price}
                  required
                />
              </FormGroup>
              <FormGroup className="col">
                <Label>Rating</Label>
                <Input
                  type="number"
                  name="rating"
                  onChange={handleChange}
                  value={formState.rating}
                  required
                />
              </FormGroup>
            </div>
            <Button type="submit">Submit</Button>
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
          {products.map((product, idx) => (
            <tr key={idx}>
              <th scope="row">{idx}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
