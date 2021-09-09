import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Createcustomer from "./components/Createcustomer";
import Createmovie from "./components/Createmovie";
import Editcustomer from "./components/Editcustomer";
import Customerlist from "./components/Customerlist";
import Movielist from "./components/Movielist";
import Rentdetails from "./components/Rentdetails";
import Editmovie from "./components/Editmovie";
import Movielistuser from "./components/Movielistuser";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/Createcustomer"} className="nav-link">
                  Movie Rental System
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/Movielistuser"} className="nav-link">
                    Movies
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/Createcustomer"} className="nav-link">
                    Create Customer
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/Customerlist"} className="nav-link">
                    Customer List
                  </Link>
                  <Nav>
                    <Link to={"/Createmovie"} className="nav-link">
                      Create Movie
                    </Link>
                  </Nav>
                  <Link to={"/Movielist"} className="nav-link">
                    Movie List
                  </Link>
                  <Link to={"/Rentdetails"} className="nav-link">
                    Rentdetails
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Createcustomer} />
                  <Route path="/Createcustomer" component={Createcustomer} />
                  <Route path="/Createmovie" component={Createmovie} />
                  <Route path="/edit-customer/:id" component={Editcustomer} />
                  <Route path="/edit-movie/:id" component={Editmovie} />
                  <Route path="/Customerlist" component={Customerlist} />
                  <Route path="/Movielist" component={Movielist} />
                  <Route path="/Rentdetails" component={Rentdetails} />
                  <Route path="/Movielistuser" component={Movielistuser} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
