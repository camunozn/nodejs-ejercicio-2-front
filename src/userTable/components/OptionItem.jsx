import IconButton from "./IconButton";

const OptionItem = ({ onDelete, onEdit }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <IconButton type="edit" color="#00AEC2" action={onEdit} />
      <IconButton type="delete" color="#DA4626" action={onDelete} />
    </div>
  );
};

export default OptionItem;
