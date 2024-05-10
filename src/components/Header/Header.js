import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TbSquareLetterV } from "react-icons/tb";
import { TbSquareRoundedLetterD } from "react-icons/tb";
import { TbSquareRoundedLetterI } from "react-icons/tb";
import { TbHexagonLetterN } from "react-icons/tb";
import { TbCircleLetterE } from "react-icons/tb";
import { TbSquareLetterS } from "react-icons/tb";
import { TbSquareRoundedLetterH } from "react-icons/tb";
import './Header.css';


function NavScrollExample() {

  return (
  
<div className="Container fluid">  
  <div className="Header">
    <Navbar expand="lg">
       
        <Navbar.Brand href="#home" style={{color:"black",fontSize:"25px",paddingLeft:"5px",paddingRight:"150px",fontWeight:"700"}}>
          <TbSquareLetterV />.
          <TbSquareRoundedLetterD />
          <TbSquareRoundedLetterI />
          <TbHexagonLetterN />
          <TbCircleLetterE />
          <TbSquareLetterS />
          <TbSquareRoundedLetterH />
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='homelink' href="#home" style={{color:"black", marginRight:"50px",fontSize:"20px",fontWeight:"600"}}>HOME</Nav.Link>
           
            <Nav.Link className='homelink'  href="#about" style={{color:"black", marginRight:"50px",fontSize:"20px",fontWeight:"600"}}>ABOUT</Nav.Link>
           
            <Nav.Link className='homelink' href="#skills" style={{color:"black", marginRight:"50px",fontSize:"20px",fontWeight:"600"}}>SKILLS</Nav.Link>     

            <Nav.Link className='homelink' href="#projects" style={{color:"black", marginRight:"50px",fontSize:"20px",fontWeight:"600"}}>PROJECTS</Nav.Link>
            
            <Nav.Link className='homelink' href="#contact" style={{color:"black", marginRight:"50px",fontSize:"20px",fontWeight:"600"}}>CONTACT</Nav.Link>
           
           
          </Nav>
         
        </Navbar.Collapse>
    </Navbar>
  </div> 
</div>       
  );
}

export default NavScrollExample;