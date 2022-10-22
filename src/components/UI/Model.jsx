import React from "react";
import styles from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModelOverLay = (props) => {
  return (
    <div className={styles.model__overlay}>
      <span className={styles.close__btn} onClick={props.onClose}>
        <i class="fa-regular fa-circle-xmark"></i>
      </span>
      {props.children}
    </div>
  );
};

const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModelOverLay onClose={props.onClose}>{props.children}</ModelOverLay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Model;
