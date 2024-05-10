import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoBootstrap } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { Col, Row ,Container } from 'react-bootstrap';

function Skills() {

    return (
      <Container>
        
        

       

                <div className='skill' id='skills'>
                   <center>
                    <p><b>Expore My</b></p>
                      
                    <h1>SKILLS</h1>    
                    </center>    
                  <br/>
                  <br/>
                </div> 

<center>          
        <Row>
            <Col md={6} className='details'>
          
                <h1>Frontend Development</h1>
              
                <h5><IoLogoHtml5 />HTML & CSS<IoLogoCss3 /></h5>  
                <div className='bar1'></div><div className='bar2'></div> <div className='bar0'>75%</div>
                
                {/* <h3><IoLogoCss3 />CSS</h3>
                <div className='bar3'></div><div className='bar4'></div> <div className='bar0'>65%</div> */}
                <br/>
                <h3><BiLogoBootstrap />Bootstrap</h3>
                <div className='bar5'></div><div className='bar6'></div> <div className='bar0'>55%</div>
                <br/>
                <h3><IoLogoJavascript />JavaScript</h3>
                <div className='bar7'></div><div className='bar8'></div> <div className='bar0'>50%</div>
                <br/>
                <h3><BiLogoReact />React JS</h3>
                <div className='bar9'></div><div className='bar10'></div> <div className='bar0'>55%</div>
                <br/>
                <br/>
            </Col>

            <Col md={6} className='details'>

                <h1> Backend Development</h1>
                
                <h5><IoLogoNodejs />NodeJS</h5>  
                <div className='bar11'></div><div className='bar12'></div> <div className='bar0'>35%</div>
                <br/>
                <h3><BiLogoMongodb />MongoDB</h3>
                <div className='bar13'></div><div className='bar14'></div> <div className='bar0'>30%</div>
                <br/>
                <h3><IoLogoPython />Python</h3>
                <div className='bar15'></div><div className='bar16'></div> <div className='bar0'>55%</div>
                <br/>
                <h3><IoLogoGithub />Git&GitHub</h3>
                <div className='bar17'></div><div className='bar18'></div> <div className='bar0'>65%</div>
                <br/>
                <br/>
               <br/>
            </Col>
        </Row>
</center>        
      </Container>
    
    );
  }
  
export default Skills;