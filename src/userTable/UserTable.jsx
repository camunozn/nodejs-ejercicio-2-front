import { TableFrame } from "./components/components.styled";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

const UserTable = ({ data, setIsEditing, showForm, setValue }) => {
  return (
    <TableFrame>
      <TableHeader items={data.headerItems} />
      {data.rows.map((item) => {
        return (
          <TableRow
            key={item.id}
            rowData={item}
            size={data.headerItems}
            setIsEditing={setIsEditing}
            showForm={showForm}
            setValue={setValue}
          />
        );
      })}
    </TableFrame>
  );
};

export default UserTable;
