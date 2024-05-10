import React from 'react';
import './Projects.css';
import Drinker1 from './Drinker1.png';
import Cartoon from './cartoon2.jpg';
import Qually from './Qually.png';
import Weather  from './weather.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container className="mt-5" id='projects'>
      <h1 className="mb-5">My Projects</h1>
      <Row>
        <Col md={4} className="mb-4">
         
          <Card>
            <Card.Img variant="top" src={Drinker1} style={{height:'410px'}} />

            <Card.Body>
              <Card.Title>Drinker</Card.Title>
              <Card.Text>
                Drinker the Coffe shop Company Website to using HTML & CSS,Bootstrap and JavaScript
              </Card.Text>

              <a  href='https://github.com/VJDinesh224/project-drinker'><Button className='me-5' variant="dark">View Code</Button></a>

              <a  href='https://drinker1.netlify.app/'><Button  variant="dark">View Site</Button></a>


            </Card.Body>
          </Card>
         
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Weather} style={{height:'410px'}} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                You can search weather in any cities.Website to build using React.JS  
              </Card.Text>
              <a href='https://github.com/VJDinesh224/weather'><Button className='me-5' variant="dark">View Code</Button></a>

              <a href='https://neweatherapp1.netlify.app/'><Button  variant="dark">View Site</Button></a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Cartoon} style={{height:'410px'}} />
            <Card.Body>
              <Card.Title>Image Search Enginee</Card.Title>
              <Card.Text>
                <b>Upcoming Project:</b> Image Search Website  to using React JS 
              </Card.Text>
              <a href='#'><Button className='me-5 ' variant="dark">View Code</Button></a>

               <a href='#'><Button  variant="dark">View Site</Button></a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
  