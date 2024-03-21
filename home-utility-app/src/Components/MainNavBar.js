import { NavLink } from "react-router-dom";
import logo from "../Images/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNavBar = () => {
    return <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/timeline">Timeline</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reminder">Payment Reminders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/loanRepay">Loan Repayment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/daySince">Day Since</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/events">Events</NavLink>
                            </li>
                        </ul>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default MainNavBar;