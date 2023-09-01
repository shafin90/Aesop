import { Container, Nav, Navbar } from "react-bootstrap";


import './CustomNavbar.css';

const CustomNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className=" customNavbar">
                <Container className="m-0 p-0">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between align-items-center">
                        {/* left side of nav */}
                        <Nav className="left-nav">
                            <Nav.Link className="text-black" href="#home">Skin care</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Body & Hand</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Hair</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Fragrance</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Home</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Kits &  Travel</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Gifts</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Read</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Stores</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Facial Appoinments</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Body & Hair</Nav.Link>
                           
                        </Nav>

                        {/* right side of navbar */}
                        <Nav className="right-nav">
                            <Nav.Link className="text-black" href="#link">Log in</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Cabinet</Nav.Link>
                            <Nav.Link className="text-black" href="#link">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;