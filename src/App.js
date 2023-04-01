import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="success" element={<Success />}></Route>
          <Route path="cancel" element={<Cancel />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
