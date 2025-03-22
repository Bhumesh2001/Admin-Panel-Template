import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="text-white">📊 Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/users" className="text-white">👥 Users</Nav.Link>
            <Nav.Link as={Link} to="/settings" className="text-white">⚙️ Settings</Nav.Link>
        </Nav>
    );
};

export default Sidebar;
