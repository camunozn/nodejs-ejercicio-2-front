import { RowContainer } from "./components.styled";
import TableItem from "./TableItem";
import OptionItem from "./OptionItem";

const TableRow = ({ rowData, size, setIsEditing, showForm, setValue }) => {
  const handleDelete = () => {
    console.log("borrando");
  };
  const handleEdit = () => {
    console.log("editando");
    setValue({ name: rowData.name, email: rowData.email });
    setIsEditing(true);
    showForm(true);
  };
  return (
    <RowContainer>
      <TableItem content={rowData.id} width={size[0].width} />
      <TableItem content={rowData.name} width={size[1].width} />
      <TableItem content={rowData.email} width={size[2].width} />
      <OptionItem onDelete={handleDelete} onEdit={handleEdit} />
    </RowContainer>
  );
};

export default TableRow;
