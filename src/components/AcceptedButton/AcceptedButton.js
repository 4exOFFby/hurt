import React from "react";
import { Button } from "./style";


 function AcceptedButton ({text,type, className, onClick}) {
  const allButtonHandler = () => {
    onClick && onClick(window.event);
    window.event.preventDefault();
  }
  return (
    <Button className={className} type={type} onClick={allButtonHandler}>{text}</Button>
  )
};

const buttonMainHandler = () => {
  console.log('Done from Main');
}

const buttonFormHandler = () => {
  console.log('Done from Form');
}

export {
  AcceptedButton,
  buttonMainHandler,
  buttonFormHandler
};