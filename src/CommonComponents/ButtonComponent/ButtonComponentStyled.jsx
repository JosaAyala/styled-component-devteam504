import styled from "styled-components";

const colorsButton = [
  {
    typeButton: "primary",
    color: "#0078d4",
    fontColor: "white",
  },
  {
    typeButton: "default",
    color: "#f3f2f1",
    fontColor: "black",
  },
  {
    typeButton: "success",
    color: "#00ad56",
    fontColor: "white",
  },
  {
    typeButton: "warning",
    color: "#ffaa44",
    fontColor: "black",
  },
  {
    typeButton: "error",
    color: "#d13438",
    fontColor: "white",
  },
];

export const ButtonComponentStyled = styled.button`
  background: ${(props) => {
    const colorSelected = colorsButton.find(
      (x) => x.typeButton === props.typeButton
    );
    return (colorSelected && colorSelected.color) || "#f3f2f1";
  }};

  color: ${(props) => {
    const colorSelected = colorsButton.find(
      (x) => x.typeButton === props.typeButton
    );
    return (colorSelected && colorSelected.fontColor) || "black";
  }};
  border: none;
  padding: 15px 12px 15px 12px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 15px
      ${(props) => {
        const colorSelected = colorsButton.find(
          (x) => x.typeButton === props.typeButton
        );
        return (colorSelected && colorSelected.color) || "#f3f2f1";
      }};
  }

  :active {
    opacity: 0.3;
  }
`;
