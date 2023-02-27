import styled from "styled-components";

const IconContainer = styled.span`
  color: ${(props) => props.color || "#202020"};
  &:hover {
    cursor: pointer;
  }
`;

const Icon = ({ iconName, color }) => {
  return (
    <IconContainer className="material-symbols-outlined" color={color}>
      {iconName}
    </IconContainer>
  );
};

export default Icon;
