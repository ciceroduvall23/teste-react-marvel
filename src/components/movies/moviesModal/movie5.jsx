import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/capita marvel.jpg'

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
        <h1 className="title-modal">Capitã Marvel</h1>
        <p className="p-movie">Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.
</p>
        
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