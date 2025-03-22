import React, { useState, useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Card style={{ width: "300px" }} className="p-4">
                <h2 className="text-center">Admin Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100">Login</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
