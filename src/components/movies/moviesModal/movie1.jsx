import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/Homem de ferro.jpg'
import Close from'../../img/close.svg'

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button className="button-card" onClick={toggleModal}>Ver Detalhes</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
           <div className="modalCard">
        <img className="img-modalTwo" src={Img}  alt="Logo" />
        <h1 className="title-modal">Homem de ferro</h1>

        <p className="p-movie">  Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre
         pressão de todos os lados para compartilhar sua tecnologia com as forças armadas.</p>
     
        
       <br></br>
       
         <h2 className="evaluation-modal">Avaliações dos fãs</h2>
  
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}