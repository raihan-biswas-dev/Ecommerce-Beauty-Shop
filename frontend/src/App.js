import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>





      <BrowserRouter>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/"><img src=".././images/logo.png" width='75px' alt="" /></Navbar.Brand>
            <Nav className="ms-auto menu">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/store">Store</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
