import React, { Component,useState } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Slider from "react-slick";
import './style.css'

/* caracteristicas dos personagens*/ 
import CharacterOne from './Character/character.One'
import CharacterTwo from './Character/character.Two'
import CharacterThree from './Character/character.Three'
import CharacterFour from './Character/character.Four'


import CardOne from '../img/homem-aranha.jpg';
import CardTwo from '../img/feiticeiraScarlet.jpg';
import CardThree from '../img/Thanos2.jpg';
import CardFour from '../img/Hulk.jpg';



export default class responsive extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
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
       <h2>Personagens de Os Vingadores</h2>
        <Slider {...settings}>
          <div>
  <MDBCard   className="grid">
    <img className="CardTwo" src={CardOne}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Homem Aranha</MDBCardTitle>
        <MDBCardText>
        Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica,Peter Parker ganha superpoderes.
        </MDBCardText>
        <div>
        <CharacterOne />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
    <MDBCard className="grid">
    <img className="CardTwo" src={CardTwo}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Feiticeira Escarlate</MDBCardTitle>
        <MDBCardText>
        Feiticeira Escarlate é uma super-heroína que aparece nos quadrinhos americanos publicados pela Marvel.
        </MDBCardText>
        <div>
        <CharacterTwo />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
     <MDBCard className="grid">
    <img className="CardTwo" src={CardThree}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Thanos</MDBCardTitle>
        <MDBCardText>
        Thanos é um personagem fictício, um supervilão das histórias em quadrinhos publicadas pela Marvel.</MDBCardText>
        <div>
        <CharacterThree  />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>

          <div>
              <MDBCard className="grid">
    <img className="CardTwo" src={CardFour}  alt="Logo"   />
      <MDBCardBody className="Card-body">
        <MDBCardTitle>Hulk</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div>
        <CharacterFour  />
        </div>
      </MDBCardBody>
    </MDBCard>
          </div>
   <div>
   
   </div>
        </Slider>
      </div>
    );
  }
}