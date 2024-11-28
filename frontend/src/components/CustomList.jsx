import { Datagrid, List, TextField } from "react-admin";

const CustomList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="total_time" />
        <TextField source="distance" />
      </Datagrid>
    </List>
  );
};

export default CustomList;
