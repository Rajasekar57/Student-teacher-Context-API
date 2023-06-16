import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <p><h4 style={{textAlign:"center"}}>"The Art Of Teaching is the Art of Assisting Discovery..."</h4></p>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/09/04/10/27/never-stop-learning-3653430_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3 style={{color:"#65087C"}}>STUDENT TEACHER MANAGEMENT PAGE:</h3>
          <p style={{color:"#0D0447"}}><h1>Guvi Learn Code In Your Native Language</h1></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

  );
}

export default Home