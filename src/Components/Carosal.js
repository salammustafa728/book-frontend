import { Carousel } from "react-bootstrap";
import Img1 from "./Images/img1.jpg";
import Img2 from "./Images/img2.jpg";
import Img3 from "./Images/img3.jpg";
import './Carosel.css';

const Carousel1 = () => {
  return (
    <div id="#Home">
      <Carousel style={{ }}>
        <Carousel.Item>
          <img
            style={{ }}
            className="d-block w-100"
            src={Img3}
            alt="First slide"
          />
           <Carousel.Caption className="caption">
            <h1><br/> </h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ }}
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ }}
            className="d-block w-100"
            src={Img1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;