import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Develop = () => {
  return (
    < >
    <Container fluid className="d-flex justify-content-center align-items-center " style={{backgroundColor:'#f8f9fa'}}>
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8}>
        <p className="lead fancy-underline text-center p-2">Lo-fi prototype</p>
        <p>A low-fidelity prototype is a simple and rough sketch of a design used to explore different ideas and features early in the development process. It was utilized to refine concepts and ensure effective decision-making before finalizing the design.</p>
        </Col>
        <Col xs={12} md={8}>
        <img 
        src="/Photos/lo-fi.png" // Replace with your image URL
        alt="persona"
        className="img-fluid shadow" // This class makes the image responsive
        style={{ maxWidth: '800px', width: '100%', height: 'auto' }} // Optional for additional responsiveness
      />  
        </Col>
      </Row>
    </Container>
    <Container fluid className="d-flex justify-content-center align-items-center p-4" style={{backgroundColor:'#f8f9fa'}}>
    <Row className="justify-content-center pb-5">
      <Col md={8} className=' text-center' >
        {/* First paragraph centered */}
        <p className="lead fancy-underline text-center p-2">Design system</p>
        {/* Second paragraph left-aligned but horizontally centered */}
        <p className="text-left">
        After the low-fidelity prototypes were selected, a design system was developed, and the application’s colors were determined. Shades of green and beige were chosen for their earthy tones, and the calming effect of green was deemed suitable for addressing the sensitive topic of climate change.
        </p>
      </Col>
  <p className='p4'></p>
      <Col xs={5} md={5} className="d-flex justify-content-center ">
        <img 
          src="/Photos/färger.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
      <Col xs={6} md={5} className="d-flex justify-content-center ">
        <img 
          src="/Photos/text.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  <Container fluid className="d-flex justify-content-center align-items-center p-4" style={{backgroundColor:'white'}}>
    <Row className="justify-content-center pb-5">
      <Col md={8} className=' text-center' >
        {/* First paragraph centered */}
        <p className="lead fancy-underline text-center p-2">Prototyping</p>
        {/* Second paragraph left-aligned but horizontally centered */}
        
      </Col>
  <p className='p4'></p>
      <Col xs={5} md={8} className="d-flex justify-content-center ">
        <img 
          src="/Photos/proto1.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
      <Col xs={6} md={8} className="d-flex justify-content-center ">
        <img 
          src="/Photos/proto2.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  <Container fluid className="d-flex justify-content-center align-items-center p-4" style={{backgroundColor:'#f8f9fa'}}>
    <Row className="justify-content-center pb-5">
      <Col md={8} className=' text-center' >
        {/* First paragraph centered */}
        <p className="lead fancy-underline text-center p-2">Implementation</p>
        {/* Second paragraph left-aligned but horizontally centered */}
        <p className="text-left">
        <p>The website was built using ReactJS, styled with the CSS framework Bootstrap,</p>
      <p>and powered by Firebase for backend services.</p>
      <p>You can view the live version of the site <a href="https://klimatkoll.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </p>
      </Col>
  <p className='p4'></p>
      <Col xs={5} md={8} className="d-flex justify-content-center ">
        <img 
          src="/Photos/componentTree.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>

    </Row>
  </Container>
  </>
  );
}

export default Develop;
