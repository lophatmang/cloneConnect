import { List, Datagrid, TextField } from "react-admin";

function TestList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
      </Datagrid>
    </List>
  );
}

export default TestList;
