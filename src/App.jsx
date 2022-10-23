import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ListCategories from './componen/ListCategories';
import NavbarComp from './componen/NavbarComp';
import Result from './componen/Result';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="mt-2">
        <Container>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Daftar Produk</strong></h4>
              <hr />
            </Col>
            <Result />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
