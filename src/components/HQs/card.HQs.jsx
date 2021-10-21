import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import Img1 from '../img/thor vikings.jpg';
import Img2 from '../img/surfista prateado.jpg';
import Img3 from '../img/wolverine2.jpg';

import './style.css'


import One from './HQsModal/modal.1'
import Two from './HQsModal/modal.2'
import Three from './HQsModal/modal.3'



export default class Responsive extends Component {
  render() {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="container-slide">
       <h2>Histórias em quadrinhos</h2>
        <Slider {...settings}>
        <div >
  <MDBCard  className="grid" >
    <img className="CardTwo" src={Img1}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Thor vikings</MDBCardTitle>
        <MDBCardText>
        Thor enfrentando vikings sedentos de sangue e amaldiçoados pela imortalidade...
         Só mesmo Garth Ennis para conceber um enredo tão originalmente bizarro.
        </MDBCardText>
    
        <div>
        <One />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="grid" >
    <img className="CardTwo" src={Img2}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Surfista prateado</MDBCardTitle>
        <MDBCardText>
        Surfista Prateado é um super-herói das histórias em quadrinhos norte-americanas da Marvel Comics.
           </MDBCardText>
    
        <div>
        <Two />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
  <MDBCard  className="grid" >
    <img className="CardTwo" src={Img3}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Wolverine</MDBCardTitle>
        <MDBCardText>
        Wolverine é um personagem fictício que aparece em quadrinhos americanos publicados pela Marvel Comics.
        </MDBCardText>
    
        <div>
        <Three />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

        </Slider>
      </div>
    );
  }
}