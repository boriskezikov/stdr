import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar className="d-flex justify-content-around">
          <a href="/home" className="brand">
            <div class="rotate-shadows"></div>
            STDR
          </a>
          <Nav className="justify-content-center" onSelect={('/home')}>
                <Nav.Link href="/home"> Главная </Nav.Link>
                <Nav.Link href="/courses"> Все курсы </Nav.Link>
                <Nav.Link href="/about"> О нас </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
