import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/thor.jpg'
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
        <h1 className="title-modal">Thor</h1>
        <p className="p-movie">Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai.</p>
        
       <br></br>
         
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}