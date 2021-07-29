import React from "react";
import { TitleComponentStyled } from "./TitleComponentStyled";

export const TitleComponent = ({ label, size, color, underline }) => {
  return (
    <TitleComponentStyled size={size} color={color} underline={underline}>
      {label && label}
    </TitleComponentStyled>
  );
};

export default TitleComponent;
