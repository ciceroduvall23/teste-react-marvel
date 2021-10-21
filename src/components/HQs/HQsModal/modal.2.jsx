import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/surfista prateado.jpg'
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
         <img className="img-modal2" src={Img}  alt="Logo" />
        <h1 className="title-modal">Surfista prateado</h1>
        <p className="p-QHs">Surfista Prateado é um super-herói das histórias em quadrinhos norte-americanas da Marvel Comics.
</p> 
       <br></br>
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}