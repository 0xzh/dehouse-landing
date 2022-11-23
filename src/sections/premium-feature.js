import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import team from 'assets/images/team.png';
import dehouse1 from 'assets/images/dehouse1.jpg';
import dehouse2 from 'assets/images/dehouse2.jpg';
import dehouse3 from 'assets/images/dehouse3.jpg';
import dehouse4 from 'assets/images/dehouse4.jpg';
import dehouse5 from 'assets/images/dehouse5.jpg';
import dehouse6 from 'assets/images/dehouse6.jpg';
import dehouse12 from 'assets/images/dehouse12.jpg';
import dehouse21 from 'assets/images/dehouse21.jpg';
import dehouse22 from 'assets/images/dehouse22.jpg';
import dehouse23 from 'assets/images/dehouse23.jpg';
import dehouse24 from 'assets/images/dehouse24.jpg';
import dehouse25 from 'assets/images/dehouse25.jpg';
import dehouse26 from 'assets/images/dehouse26.jpg';
import dehouse27 from 'assets/images/dehouse27.jpeg';


export default class NextJsCarousel extends Component {
	render() {
		return (
			<div style={{width: '100%', height: '100%', position: 'relative'}}>
			<Carousel >
				<div>
					<img fill src={dehouse3}  height="100%" layout='fill'  objectFit='contain' alt="image3"/>
					

				</div>
				<div>
					<img fill src={dehouse4} height="100%" layout='fill'  objectFit='contain' alt="image4"/>
					

				</div>
				<div>
					<img src={dehouse5} height="100%" layout='fill'  objectFit='contain' alt="image5"/>
					

				</div>
				<div>
					<img fill src={dehouse6} height="100%" layout='fill'  objectFit='contain' alt="image5"/>
					

				</div>
			</Carousel>
			</div>
		);
	}
};
