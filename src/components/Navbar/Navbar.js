import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav"; 
import NavDropdown from "react-bootstrap/NavDropdown"; 
import Navbar from "react-bootstrap/Navbar"; 

const NavBar = () => {
    return (
        <Navbar expand="lg"
                        bg="warning"> 
            <Container> 
                <Navbar.Brand href="/"> 
                    Home 
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto">  
                        <NavDropdown title="Web Technology"
                                        id="collasible-nav-dropdown1"> 
                            <NavDropdown.Item href="/react"> React </NavDropdown.Item>                                  
                            <NavDropdown.Item href="Angular"> Angular </NavDropdown.Item> 
                            <NavDropdown.Item href="HTML"> HTML </NavDropdown.Item> 
                            <NavDropdown.Item href="CSS"> CSS </NavDropdown.Item> 
                            <NavDropdown.Item href="JavaScript"> JavaScript </NavDropdown.Item> 
                        </NavDropdown> 
                        <NavDropdown title="Backend Technology"
                                        id="collasible-nav-dropdown2"> 
                            <NavDropdown.Item href="/java"> Java </NavDropdown.Item> 
                            <NavDropdown.Item href="#backend/3.2"> Spring </NavDropdown.Item> 
                            <NavDropdown.Item href="#backend/3.3"> Springboot </NavDropdown.Item> 
                            <NavDropdown.Item href="#backend/3.3"> REST API </NavDropdown.Item> 
                            <NavDropdown.Item href="#backend/3.3"> Oracle </NavDropdown.Item> 
                        </NavDropdown>
                        <NavDropdown title="Non Functional Requirements"
                                        id="collasible-nav-dropdown3"> 
                            <NavDropdown.Item href="/security"> Security </NavDropdown.Item> 
                            <NavDropdown.Item href="/performance"> Performance </NavDropdown.Item> 
                            <NavDropdown.Item href="/usability"> Usability </NavDropdown.Item> 
                            <NavDropdown.Item href="/readability"> Readability </NavDropdown.Item> 
                            <NavDropdown.Item href="#web/3.3"> Maintainability </NavDropdown.Item>
                            <NavDropdown.Item href="#web/3.3"> Portability </NavDropdown.Item>
                            <NavDropdown.Item href="#web/3.3"> Compliance </NavDropdown.Item>                                  
                        </NavDropdown> 
                        <NavDropdown title="Software Architect"
                                        id="collasible-nav-dropdown4"> 
                            <NavDropdown.Item href="/designPattern"> Design Patterns </NavDropdown.Item> 
                            <NavDropdown.Item href="#web/3.2"> Design Principles </NavDropdown.Item> 
                            <NavDropdown.Item href="#web/3.3"> HLD </NavDropdown.Item> 
                            <NavDropdown.Item href="#web/3.3"> LLD </NavDropdown.Item> 
                            <NavDropdown.Item href="#web/3.3"> Types of Architectural Patterns </NavDropdown.Item> 
                        </NavDropdown> 
                    </Nav> 
                </Navbar.Collapse> 
            </Container> 
        </Navbar>
    );
};

export default NavBar;