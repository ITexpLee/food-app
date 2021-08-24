import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// import css and assets
import classes from "./Modal.module.css";

// Backdrop is the dark background in Modal which is simply for display
const Backdrop = (props) => {
  return (
    <section className={classes.backdrop} onClick={props.onClose}></section>
  );
};

// This the main Modal overlay displaying the component
const ModalOverlay = (props) => {
  return (
    <section className={classes.modal}>
      <article className={classes.content}>{props.children}</article>
    </section>
  );
};

// Render the jsx code instead of the root element
const portalElement = document.querySelector("#overlays");

// Combining both the functionalities in one Modal Component
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
