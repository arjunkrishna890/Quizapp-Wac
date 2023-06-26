import React, { useState } from 'react';
import './Card.scss';
import { QuestionState } from '../Context/Context';
import useCardHandler from '../customHooks/useCardHandler';
import { Button, closeButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaGift} from "react-icons/fa";




function CatCard() {
  const { QuestionArray,state } = QuestionState();
  const [states, handleCheck, next,handleClose,successHandle] = useCardHandler(state);
  const currentItem = QuestionArray[states.index];

  return (
    <div className="projectCard">
      {states.index <= QuestionArray.length - 1 ? (
        <div>
          <div>
            <p>
              {states.index + 1}.{currentItem.question} ?
              <b> <p style={{ fontSize: '1rem' }}>Score:{states.score}</p></b>
             
            </p>
          </div>
          <ul>
            {currentItem.options.map((option, key) => (
              <div key={key}>
                <button
                  onClick={() =>handleCheck(option,currentItem.answer,currentItem.points,key,currentItem)}
                  className={states.selectedOption === key ? states.color : ''}
                  disabled={states.disable}>
                  {option}
                </button>
              </div>
            ))}
          </ul>
          <span>
            <button className="Next" onClick={() => next(currentItem.points)}>
              Next
            </button>
          
          </span>
      
          <b>
            <p style={{ color: 'blue' }}>Question Point:{currentItem.points}</p>
          </b>
        </div>
      ) : (
        <>
          <div style={{}}>
            <h1 style={{ fontSize: '2.3rem' }}>
              {states.score > states.total / 2 ? 'Congratulations!' : 'Sorry, better luck next time'}
            </h1>
            <p style={{ fontSize: '1.3rem' }}>
              You have scored {states.score} out of {states.total}!
            </p>
          </div>
        </>
      )}



      <Modal show={states.show} style={{textAlign:"center"}}  onHide={handleClose} autoFocus={true} aria-labelledby="contained-modal-title-vcenter"
      centered  >
        <Modal.Header style={{textAlign:"center",justifyContent:"center",}} >
          <img src="https://static.vecteezy.com/system/resources/previews/010/263/595/original/christmas-gift-design-on-a-transparent-background-round-gift-box-design-with-pink-color-wrap-paper-and-golden-color-ribbon-gift-image-for-birthdays-anniversaries-weddings-or-christmas-events-free-png.png" 
          style={{width:"80px",height:"70px"}}/>
          <Modal.Title  id="contained-modal-title-vcenter" style={{fontSize:"3rem",color:"red",fontWeight:"bolder"}} >Special Gift</Modal.Title>
        </Modal.Header>
       
        <Modal.Body > 
         Woohoo, you have got 5 points Extra! 
         </Modal.Body>
        <Modal.Footer >
       
          <Button variant="success"  onClick={successHandle}><FaGift color='gold' size={20} />Claim Reward </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default CatCard;
