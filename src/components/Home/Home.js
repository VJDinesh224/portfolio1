import { Button, Navbar } from 'react-bootstrap';
import './Home.css';
import Cartoon from  './Cartoon3.jpeg';
import Cartoon1 from './Cartoon.jpg';
import Cartoon2 from './cartoon2.jpg';
import Resume from './V.Dinesh2024.pdf';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import {Container,Row,Col,button} from "react-bootstrap";


function Home() {

 
  

    return(

        <Container>
            <Row>
              <Col className='img' id='home'>


                   <div className="img my-5 "> 
                     <img src={Cartoon}  alt=""/>
                   </div> 
                     <br/>
                     <br/>
              </Col>

              

               <Col>

                 <div className='section' >

                 <h5 className='section1'>Hello, I'm</h5>
                 <h1 className='section2'>V.Dinesh</h1> 
                 <h4 className='section4'>A Beginner</h4>
                 <h4 className='section3'>Front-End Developer</h4>

                 <a href="V.Dinesh2024.pdf" download={Resume}><button className='btn3'><b>Download CV</b></button></a>
                 <br/>
               
                 <a href="#contact"><button className='btn4'><b>Contact Info</b></button></a>
                 <br/>
                 <br/>

                                        
                 </div>
                

                <div className='icons1'>

                  <h3 ><a href="https://linkedin.com" style={{color:"black"}}><AiOutlineLinkedin /></a></h3>
                  {/* <h3 ><a href="https://whatsapp.com" style={{color:"black"}}><AiOutlineWhatsApp /></a></h3>
                  <h3><a href="https://telegram.com" style={{color:"black"}}><FaTelegramPlane /></a></h3>
                  <h3 ><a href="https://instagram.com" style={{color:"black"}}><AiOutlineInstagram /></a></h3>
                  <h3><a href="https://facebook.com" style={{color:"black"}}><AiOutlineFacebook /></a></h3> */}
                  <h3 ><a href="https://github.com/VJDinesh224" style={{color:"black"}}><IoLogoGithub /></a></h3>
               </div>
               
                <br/>
                <br/>
                <br/>
                <br/>

               </Col>

            </Row>
        </Container>
    )
}

export default Home;