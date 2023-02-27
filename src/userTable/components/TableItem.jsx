import { ItemContainer, ItemText } from "./components.styled";

const TableItem = ({ width, content, title, children }) => {
  return (
    <ItemContainer width={width}>
      <ItemText title={title}>{content}</ItemText>
      {children}
    </ItemContainer>
  );
};

export default TableItem;
