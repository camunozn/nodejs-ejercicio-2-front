import { ButtonContainer } from "./components.styled";
import Icon from "../../assets/icons/Icon";

const IconButton = ({ type, color, action }) => {
  return (
    <ButtonContainer color={color} onClick={action}>
      <Icon iconName={type} color="#fefefe" />
    </ButtonContainer>
  );
};

export default IconButton;
