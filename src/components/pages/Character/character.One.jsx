import React, { useState } from "react";
import "./styles.css";

import Img from '../../img/homem-aranha.jpg'
import Close from'../../img/close.svg'
import Modal from "react-modal";

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
        <img className="img-modal" src={Img}  alt="Logo" />
        <h1 className="title-modal">Homem Aranha</h1>
        <h2 className="h2-modal">Aparições:</h2>
        <p className="p-modal">Homem de Ferro 2</p>
        <p className="p-modal">Homem-Formiga</p>
        <p className="p-modal">Capitão América: Guerra Civil</p>
        <p className="p-modal">Vingadores: Guerra Infinita</p>
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