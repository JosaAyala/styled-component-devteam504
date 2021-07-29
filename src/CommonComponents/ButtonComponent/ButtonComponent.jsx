import React from "react";
import { ButtonComponentStyled } from "./ButtonComponentStyled";

export const ButtonComponent = ({ label, typeButton, onClick, children }) => {
  return (
    <ButtonComponentStyled typeButton={typeButton} onClick={onClick && onClick}>
      {label && label}
      {children && children}
    </ButtonComponentStyled>
  );
};

export default ButtonComponent;
