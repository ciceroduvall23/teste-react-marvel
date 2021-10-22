import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/Homem de ferro2.jpg'
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
        <h1 className="title-modal">Homem de ferro 2</h1>
       
        <p className="p-movie">O inventor bilionário Tony Stark sofre
         pressão de todos os lados para compartilhar sua tecnologia com as forças armadas.</p>
        
        
       <br></br>
         
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}