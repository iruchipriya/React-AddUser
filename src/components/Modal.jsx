import React from 'react';

const Modal = props => {
  return (
    <div>
      <div onClick={props.onConfirm} />
      <div>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
