import React, { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function NavbarComp() {
    const { logout } = useContext(AuthContext);

    return (
        
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="px-4">
                <Navbar.Brand href="/">🌟 Admin Panel</Navbar.Brand>
                <Button variant="outline-light" onClick={logout}>Logout</Button>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
