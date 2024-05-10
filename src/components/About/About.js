import './About.css';
import {Container,Row,Col,button} from "react-bootstrap";
import Profile1 from './profile1.jpeg';
import Profile2 from './profile2.jpeg';
import Profile3 from './profile3.jpeg';
import Profile4 from './profile4.jpeg'; 


function About() {

    return(

      <Container>
        
        <Row>

        <Col>
               {/* <center>
                <h1 className='mee'>About Me</h1>
                </center>
                <br/> */}
            
               <img className='profileimage' src={Profile1}  id='about'/>
            </Col>

            <Col>
               <center>
                <h1 className='mee'>About Me</h1>
                </center>
                <br/>
            
            {/* </Col>
 
            <Col> */}
                <h4 className='mee1'>Hii,My Name Is V.Dinesh.I have Completed Python Fullstack 
                   Web Development in Xplore It Corp,Coimbatore.</h4>
                <br/>
                <h4 className='mee2'>I have Frontend skills like HTML ,CSS ,Bootstrap, JavaScript
                   and React JS.</h4>
                <br/>
                <h4 className='mee3'>In Backend I know Node JS ,MongoDB and Python basics.</h4>
                <br/>
                <h4 className='mee3'>I have 50 Days Working Experienced in Internship at Classified
                 Web Designs Company.</h4>
                <br/>
                <br/>
                <br/>

    
            </Col>
        </Row>
      </Container>

    )
}

export default About;
