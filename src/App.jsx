import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import NavbarComp from "./components/NavbarComp";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <NavbarComp />
                <Container fluid>
                  <Row>
                    <Col md={2} className="bg-dark text-white min-vh-100">
                      <Sidebar />
                    </Col>
                    <Col md={10} className="p-4">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<Users />} />
                      </Routes>
                    </Col>
                  </Row>
                </Container>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
