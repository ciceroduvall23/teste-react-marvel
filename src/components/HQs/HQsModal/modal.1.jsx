import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";
import Img from'../../img/thor vikings.jpg'
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
        <img className="img-modalHQs" src={Img}  alt="Logo" />
        <h1 className="title-modal">Thor vikings</h1>
        <p className="p-QHs">Thor enfrentando vikings sedentos de sangue e amaldiçoados pela imortalidade...
         Só mesmo Garth Ennis para conceber um enredo tão originalmente bizarro, sem cair no ridículo.</p>
        
       <br></br>
       
       
  
        <button className="close-modal" onClick={toggleModal}> 
        <img className="img-close" src={Close}  alt="Logo" />
         </button>
        </div>
      </Modal>
    </div>
  );
}