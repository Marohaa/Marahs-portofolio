import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
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
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Klimatkoll</h1>
            <p style={{ fontSize: '20px' }}>
            Designing a website for a Swedish school aimed at educating students aged 13-15 about climate change and its impact.
            </p>
            <p><strong>Project Type:</strong> Design an educating website</p>
            <p><strong>Role:</strong> User research + UX/UI designer + brand designer + implementation</p>
            <p><strong>Industry:</strong> Educational, Climate</p>
            <p><strong>Tools:</strong> Figma, Canva, Illustrator, ReactJS</p>
            <p><strong>Duration:</strong> 2 months, 2024</p>
            <Button 
              href="https://www.figma.com/proto/cZxBC4r3YraBsDtpqB4IjC/Prototyp?node-id=55-3&node-type=canvas&t=Sok9u0fcFfz6DrjO-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2" 
              style={{ backgroundColor: '#0B6BA5', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '50px' }}
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
  <div ></div>
   <Container className="mt-5 mb-5">
      <Row className="justify-content-center"> {/* Centrera kolumnerna */}
        {/* Discover Column */}
        <Col xs={12} md={4} className=" text-center"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive'}}>Discover</h3>
          <ul style={{ listStyleType: 'none', padding: '20px' }}>
            <li>User Research</li>
           
            <li>Personas</li>
            <li>Scenario</li>
            <li>User jouneys</li>
            
          </ul>
        </Col>

        {/* Define Column */}
        <Col xs={12} md={4} className=" text-center"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive' }}>Define</h3>
          <ul style={{ listStyleType: 'none', padding: '20px' }}>
            <li>Funktioner samt krav</li>
            <li>UML-diagram</li>
            <li>User stories</li>
          </ul>
        </Col>

        {/* Develop Column */}
        <Col xs={12} md={4} className=" text-center"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive' }}>Develop</h3>
          <ul style={{ listStyleType: 'none', padding: '20px'}}>
            <li>Lo-fi prototyp</li>
            <li>Designsystem</li>
            <li>Wireframes</li>
            <li>Prototyping</li>
            <li>Implementation</li>
            <li>Bra och kunde gjort annorlunda</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#E46698', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive' }}>
    User Research
          </h2>
    </div>
    <Container fluid className='pb-4'  >
      {/* User Research Header */}
      <Row className="justify-content-center text-center p-2">
        <Col md={12} >
          
          <p  className="lead fancy-underline">Discover phase</p>
        </Col>
      </Row>

     
    </Container>

    <Container fluid className="d-flex justify-content-center align-items-center p-4" >
  <Row className="justify-content-center pb-5">
    <Col md={8}>
      <h2 style={{ fontFamily: 'Patrick Hand, cursive' }}>Target Audience Research</h2>
      
      <p>The target audience for this website is teenagers aged 13-15 in Swedish schools, as defined by the educators.
      </p>
      <p>Research Process</p>
      <ul >
        <li>Articles and reports on youth engagement in climate issues were collected and analyzed.</li>
        <li>The predefined target audience of students aged 13-15 was studied through secondary sources.</li>
        <li>Research focused on topics such as climate anxiety, youth involvement in environmental issues, and their understanding of climate change.</li>
        <li>It was discovered that many young people had not received in-depth education on climate issues, affecting their awareness and interest.</li>
      </ul>
      <p className="pt-4">TechCity’s Solution:</p>
      <ul >
        <li><strong>User-Friendly Wish List:</strong> A built-in, intuitive wish list feature designed from the ground up.</li>
        <li><strong>Seamless Experience:</strong> Users can easily add and keep track of items without unnecessary logins or re-selections.</li>
      </ul>
      <hr style={{ borderColor: 'black', margin: '40px' }} />
      <h4 className="pt-2" style={{ fontFamily: 'Patrick Hand, cursive' }}>Who are the users?</h4>
      <ul >
        <li>Technology enthusiasts and professionals interested in the latest technology, innovations, and IT trends.</li>
        <li>Students and developers looking to learn more and grow within the tech field.</li>
        <li>Small to medium-sized businesses seeking affordable and tailored tech solutions.</li>
        <li>Startups searching for innovation and digital solutions to scale their businesses.</li>
      </ul>
      <hr style={{ borderColor: 'black', margin: '40px' }} />
      <h4 className="pt-2" style={{ fontFamily: 'Patrick Hand, cursive' }}>Goals of the Product (For both business & users)</h4>
      <p> <strong>Business Goals</strong></p>
      <ul >
        <li>Establish TechCity as a leading authority and trusted source of information in technology and innovation.
        </li>
        <li>Convert website visitors into qualified leads or paying customers by offering valuable, tailored products, services, and resources.
        </li>
        <li>Improve the purchase process by enabling users to easily view and manage their wish list throughout their shopping journey.</li>
      </ul>
      <p> <strong>User Goals</strong></p>
      <ul >
        <li>Provide up-to-date technology news, trends, and innovations to keep users informed and engaged.</li>
        <li>Allow users to access and view their wish list after logging in and facilitate a smooth purchasing process for wish-listed items.
        </li>
        <li>Offer small to medium-sized businesses customized and cost-effective tech solutions that cater to their specific needs.</li>
      </ul>
    </Col>
  </Row>
</Container>
<div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#0B6BA5', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive'}}>
    Market Analysis
          </h2>
    </div>
    <div 
  style={{
    padding: '20px 40px',
    
  }}
>
  To conduct a market analysis, I have analyzed  <a href="https://www.power.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}> Power.se</a> and <a href="https://www.elgiganten.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}> Elgiganten.se</a>.
</div>


    
    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#E46698', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive' }}>
    Personas
          </h2>
    </div>
    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div className="d-flex justify-content-center mt-4">
  <img 
    src="/Photos/Emma (1).png"  // Replace with your image URL
    alt="persona"
    className="img-fluid shadow"  // This class makes the image responsive
    style={{ maxWidth: '800px', width: '100%', height: 'auto' }} // Max width 500px, with responsive behavior
  />
</div>
<div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>

    <div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#F5C518', color: 'black', padding: '30px', fontFamily: 'Patrick Hand, cursive'}}>
    MVH & User flow
          </h2>
          <p className="lead fancy-underline">Define phase</p>
    </div>
    <section className="container py-5">
  <h2 className="text-center mb-4" style={{ fontFamily: 'Patrick Hand, cursive' }}>HMWs to Product Goals</h2>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-4">
      <div className="p-4 shadow" style={{ backgroundColor: '#e46698', borderRadius: '8px', color: 'white' }}>
        <h5>How might we help the user keep their wishlist items after logging in?</h5>
        <p>By implementing persistent storage mechanisms such as local storage or syncing wishlist data with the user's account, we ensure the wishlist is retained after login.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="p-4 shadow" style={{ backgroundColor: '#0b6ba5', borderRadius: '8px',  color: 'white' }}>
        <h5>How might we help the user remember their wishlist items during the checkout process?</h5>
        <p>Integrating wishlist reminders within the checkout flow, perhaps by displaying them in the cart, can help users remember and consider adding these items to their purchase.</p>
      </div>
    </div>
  </div>
</section>

    <h2 className="text-center mb-4" style={{ fontFamily: 'Patrick Hand, cursive' }}>User flow</h2>
    
    <div className="d-flex justify-content-center mt-5">
        
      <img 
        src="/Photos/Green and White Project Phases Flowchart.png" // Replace with your image URL
        alt="persona"
        className="img-fluid shadow" // This class makes the image responsive
        style={{ maxWidth: '800px', width: '100%', height: 'auto' }} // Optional for additional responsiveness
      />
    </div>
    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#0b6ba5', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive'  }}>
    Wireframes
          </h2>
    </div>
    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Photos/Namnlös design (46).png" className="d-block w-100 img-fluid shadow" alt="First slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wifi.png" className="d-block w-100 img-fluid shadow" alt="Second slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wifi (1).png" className="d-block w-100 img-fluid shadow" alt="Third slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
    </svg>
  </span>
  <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </span>
  <span className="visually-hidden">Next</span>
</button>
</div>
<div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
<div className="justify-content-center text-center mt-4"> 
    <h2 style={{ backgroundColor: '#0b6ba5', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive' }}>
    Prototyp
          </h2>

    </div>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin:'20px'}}>
    
  <Button 
    href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&node-type=canvas&t=tpaCGDBPEb2loNS1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
    style={{ backgroundColor: '#F5C518', color: 'black', border: 'none', padding: '12px 24px', borderRadius: '50px' }}
  >
    View hi-fi prototype
  </Button>
</div>
    <div className="d-flex justify-content-center mt-5">
        
        <img 
          src="/Photos/Wifi (2).png" 
          alt="persona"
          className="img-fluid shadow " // This class makes the image responsive
          style={{ maxWidth: '100%', height: 'auto' }} // Optional for additional responsiveness
        />
      </div>
      <div style={{paddingTop:'50px', paddingBottom:'50px'}}></div>
      
    
    </>
  );
};



export default Sektionklimt;