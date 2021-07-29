import styled from "styled-components";

const titlesSizes = [
  {
    size: "large",
    fontSize: "48px",
  },
  { size: "medium", fontSize: "28px" },
  { size: "small", fontSize: "20px" },
];

export const TitleComponentStyled = styled.label`
  font-size: ${(props) => {
    const selectedTitle = titlesSizes.find((x) => x.size === props.size);

    return (selectedTitle && selectedTitle.fontSize) || "36px";
  }};
  font-weight: 600;
  color: ${(props) => (props.color && props.color) || "black"};
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: ${(props) => (props.underline && "underline") || "none"};
`;
