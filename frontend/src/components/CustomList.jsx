import { Datagrid, List, TextField } from "react-admin";
import Dashboard from "./dashboard/Dashboard";

const CustomList = (props) => {
  return (
    <>
      <Dashboard />
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="total_time" />
          <TextField source="distance" />
        </Datagrid>
      </List>
    </>
  );
};

export default CustomList;
