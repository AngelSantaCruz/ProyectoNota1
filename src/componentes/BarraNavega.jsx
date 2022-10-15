//import {Navbar, Nav, Container} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const BarraNavegaBootstrao = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"> Build your PC</Navbar.Brand>
                <NavbarToggle aria-controls = "basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/About">About</Nav.Link>
                     <Nav.Link href="/Mostrar">Mostrar</Nav.Link>
                     <Nav.Link href="/Ranking">Ranking</Nav.Link>
                     <Nav.Link href="/Formulario">Formulario</Nav.Link>
                     <Nav.Link href="/Reviews">Reviews</Nav.Link>
                     <Nav.Link href="/Support">Support</Nav.Link>
                     
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    <Button variant="outline-success" >Search</Button>
                </Form>
                </NavbarCollapse>
            </Container>
        </Navbar>

    )
}