import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Dashboard() {
    return (
        <div>
            <h2>📊 Dashboard</h2>
            <Row className="mt-4">
                <Col md={4}>
                    <Card className="p-3">
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>👥 1,500 Active Users</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="p-3">
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>💰 $45,000 This Month</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
