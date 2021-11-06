import React from 'react';
import hb1 from '../../Images/hb1.jpg';
import hb2 from '../../Images/hb2.jpg';
import hb3 from '../../Images/hb3.jpg';
import { Carousel } from 'react-bootstrap';
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
            {/* Home page a upore je banner gula ase setar bootstrap er slider kaj */}
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100 bannerDesign" src={hb1} alt="First slide" />
                    <Carousel.Caption className="caption">
                        <h3>Mental Health Matters</h3>
                        <p>There is hope, even when your brain tells you there isn’t.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 bannerDesign" src={hb2} alt="Second slide" />
                    <Carousel.Caption className="caption">
                        <h3>It's okay not to be okay</h3>
                        <p>You don't have to struggle in silence. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 bannerDesign" src={hb3} alt="Third slide" />
                    <Carousel.Caption className="caption">
                        <h3>Let your story go. </h3>
                        <p>Allow yourself to be present with who you are right now.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;