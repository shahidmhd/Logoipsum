import Carousel from 'react-bootstrap/Carousel';

function Mainpage() {
  return (
    <Carousel style={{marginTop:'1em'}} className='p-5 d-none d-lg-block d-md-block'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" 
          src="https://media.istockphoto.com/id/1308684522/vector/blue-and-green-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ELAPwLRDLH1AbjPDL9RyKBuJR9vcJqn0j8Iz4JLfuCI="
          alt="First slide"
          style={{height:'700px',borderRadius:'40px'}}


        />
        <Carousel.Caption>
          <h3>E-commerce project</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/happy-woman-shopping-with-shopping-bags_1150-20495.jpg"
          alt="Third slide"
          style={{height:'700px',borderRadius:'40px'}}
        />
        <Carousel.Caption>
          <h3>E-commerce project</h3>
          <p>
     {/* write something */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainpage;