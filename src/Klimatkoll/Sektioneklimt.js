import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
import Develop from './develop';
import Poblemklimat from './poplemklimat';
// Main Section component
const Sektionklimt = () => {
  return (
    <>
      <Container fluid className="p-4" style={{ backgroundColor: '#F5C518', color: 'black' }}>
        <Row className="justify-content-center align-items-center pt-5 pb-5">
          {/* Left Section */}
          <Col xs={12} md={6} className="text-center">
            <img 
              src="/Photos/klimat.gif" 
              alt="Techcity" 
              className="img-fluid mb-3" 
              style={{ borderRadius: '15px', height: 'auto' }} 
            />
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6}>
            <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>Klimatkoll</h1>
            <p style={{ fontSize: '22px' }}>
            Designing a website for a Swedish school aimed at educating students aged 13-15 about climate change and its impact.
            </p>
            <p><strong>Project Type:</strong> Design an educating website</p>
            <p><strong>Role:</strong> User research + UX/UI designer + brand designer + implementation</p>
            <p><strong>Industry:</strong> Educational, Climate</p>
            <p><strong>Tools:</strong> Figma, Canva, Illustrator, ReactJS, Firebase</p>
            <p><strong>Duration:</strong> 2 months, 2024</p>
           
  <Button
    href="https://www.figma.com/proto/cZxBC4r3YraBsDtpqB4IjC/Prototyp?node-id=55-3&node-type=canvas&t=Sok9u0fcFfz6DrjO-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2"
    target="_blank"
    rel="noopener noreferrer" style={{ backgroundColor: '#0B6BA5', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '50px' }}
  >
    View hi-fi prototype
  </Button>
  


          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
      
  </Row>
  </Container>
  
  <Container className='pt-5 pb-5'>
  <Row className="d-flex justify-content-center text-center">
    {/* Discover Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '45px', marginBottom: '20px' }}>
        Discover
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>User Research</li>
        <li>Personas</li>
        <li>Scenario</li>
      </ul>
    </Col>

    {/* Define Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '45px', marginBottom: '20px' }}>
        Define
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>MoSCoW</li>
        <li>UML-diagram</li>
      </ul>
    </Col>

    {/* Develop Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '45px', marginBottom: '20px' }}>
        Develop
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>Lo-fi prototype</li>
        <li>Design system</li>
        <li>Prototyping</li>
        <li>Implementation</li>
      </ul>
    </Col>
  </Row>
</Container>


<div className="justify-content-center text-center py-5">
    <h2 style={{
        background: 'linear-gradient(135deg, #f5c518, #e46698)',
        color: 'white',
        padding: '20px 40px',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Responsive font size
        fontFamily: 'Patrick Hand, cursive',

        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
    }}>
        Discover phase
    </h2>
</div>
<Container fluid   >
      {/* User Research Header */}
      <Row className="justify-content-center text-center p-2">
        <Col md={12} className='pb-3' >
          
          <h3  className=" fancy-underline " style={{ color: '#333', fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>User Research</h3>
        </Col>
      </Row>
    </Container>
    
<Poblemklimat />

<Container fluid  >
  <Row className="justify-content-center text-center">
    <Col md={10}>
    <div className='pb-3'>
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>Personas</h3>
      </div> <p style={{textAlign: 'left'}}>
        Two personas, Alicia Perry and Gabriel Andersson, were created based on the collected data to represent different segments of the target audience. Alicia, our primary persona, reflects the more engaged segment interested in climate issues, while Gabriel represents those with less knowledge or interest in the topic.
      </p>
    </Col>
  </Row>

  {/* Personas Images */}
  <Row className="justify-content-center mb-5">
    <Col xs={12} md={5} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)',  overflow: 'hidden' }}>
        <img 
          src="/Photos/persona 1.png" 
          alt="Persona Alicia" 
          className="img-fluid"
          style={{  maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Alicia Perry</p>
      </div>
    </Col>
    <Col xs={12} md={5} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)',  overflow: 'hidden' }}>
        <img 
          src="/Photos/persona 2.png" 
          alt="Persona Gabriel" 
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Gabriel Andersson</p>
      </div>
    </Col>
  </Row>
</Container>

{/* Scenario Section */}
<Container fluid className="py-5" >
  <Row className="justify-content-center text-center mb-5">
    <Col md={10}>
    <div className='pb-3'>
      <h3 className=" fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>Scenario</h3>
     </div> <p style={{textAlign: 'left'}}>
        Detailed scenarios for each persona were crafted to better represent their expectations and create a more engaging experience.
      </p>
    </Col>
  </Row>

  {/* Scenario Images */}
  <Row className="justify-content-center mb-5">
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{   overflow: 'hidden' }}>
        <img 
          src="/Photos/AlicaSen.png" 
          alt="Scenario Alicia" 
          className="img-fluid"
          style={{  maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Alicia's Scenario</p>
      </div>
    </Col>
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{   overflow: 'hidden' }}>
        <img 
          src="/Photos/gaberilsSen.png" 
          alt="Scenario Gabriel" 
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Gabriel's Scenario</p>
      </div>
    </Col>
  </Row>
</Container>

    <div className="justify-content-center text-center py-5 " style={{backgroundColor:'white'}}> 
    <h2 style={{
        background: 'linear-gradient(135deg, #f5c518, #e46698)',
        color: 'white',
        padding: '20px 40px',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Responsive font size
        fontFamily: 'Patrick Hand, cursive',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
    }}>
    Define phase
          </h2>
    </div>
    
    <section className="container py-5">
  <div className="row justify-content-center">
  <div className="col-md-10 mb-4 d-flex justify-content-center">
  <h3 className="text-center mb-4 fancy-underline" style={{fontFamily: 'Patrick Hand, cursive', color: '#333', fontSize: '45px' }}>MoSCoW</h3>

  </div>
    <div className="col-md-5 mb-4 d-flex justify-content-center">
      <div className="p-4 flex-grow-1 text-center" style={{
    background: 'linear-gradient(135deg, #e46698, #f48fb1)', // Pink gradient
    color: 'white',
    padding: '40px 20px', // Adds even top and bottom padding
    borderRadius: '20% 0 20% 20%', // Asymmetric rounded corners
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Soft shadow
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers content vertically

    textAlign: 'left', // Centers text within elements
    maxWidth: '100%',
      }}>
        <h5 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>Key Requirements for Alicia</h5>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Must have: Easy navigation, clear graphs, minimal text.</p>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Should have: Videos, quizzes, challenges, profile picture options.</p>
        <p style={{ lineHeight: '1.6', textAlign: 'left' }}>Could have: Log-in page.</p>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Want to have: A page where different schools can compete against each other.</p>
      </div>
    </div>
    <div className="col-md-5 mb-4 d-flex justify-content-center">
      <div className="p-4 flex-grow-1 text-center " style={{
    background: 'linear-gradient(135deg, #e46698, #f48fb1)', // Pink gradient
    color: 'white',
    padding: '40px 20px', // Adds even top and bottom padding
    borderRadius: '0 20% 20% 20%', // Asymmetric rounded corners
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Soft shadow
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers content vertically
   
    textAlign: 'left', // Centers text within elements
    maxWidth: '100%',
      }}>
        <h5 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>Key Requirements for Gabriel</h5>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Must have: Basic information, three educational sections.</p>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Should have: Quizzes, challenges, images.</p>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Could have: Modern design, profile page with picture and collected points.</p>
        <p style={{ lineHeight: '1.6',textAlign: 'left' }}>Want to have: Ability to compare scores with others in the app.</p>
      </div>
    </div>
  </div>
</section>

    <div className="d-flex justify-content-center ">
    <section className="container ">
  <div className="row justify-content-center">
    <div className="col-md-12 text-center p-4">
    <h2 className="display-4 fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333' ,fontSize: '45px'}}>UML-diagram</h2>
    </div>
    <div className="col-md-8 text-center">
    <img 
        src="/Photos/Uml.png" // Replace with your image URL
        alt="persona"
        className="img-fluid " // This class makes the image responsive
        style={{ maxWidth: '800px', width: '100%', height: 'auto',   }} // Optional for additional responsiveness
      />    </div>
  </div>
</section>
     
    </div>
    <Develop />
    </>
  );
};



export default Sektionklimt;