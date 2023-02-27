import { RowContainer } from "./components.styled";
import TableItem from "./TableItem";

const TableHeader = ({ items }) => {
  return (
    <RowContainer>
      {items.map((item) => (
        <TableItem
          key={item.name}
          title="true"
          content={item.name}
          width={item.width}
        />
      ))}
    </RowContainer>
  );
};

export default TableHeader;
