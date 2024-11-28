import {
  Datagrid,
  FunctionField,
  List,
  TextField,
  WrapperField,
} from 'react-admin';
import DriveThumbField from './DriveThumbField';
import DriveSpeedField from './DriveSpeedField';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
const DatagridHeader = ({ children }) => {
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      {/* empty cell to account for the select row checkbox in the body */}
      {/* {React.Children.map(children, (child) =>
                React.isValidElement(child) ? (
                    <TableCell key={child.props.source}>{child.props.source}</TableCell>
                ) : null
            )} */}
    </TableRow>
  </TableHead>;
};
const CustomList = () => {
  return (
    <List>
      <Datagrid
        header={<DatagridHeader />}
        isRowSelectable={() => false}
        bulkActionButtons={false}
        sx={{
          '& .RaDatagrid-row': {
            display: 'block',
            margin: '16px',
            background: 'linear-gradient(to top, #1A1E20FF, #2E363A)',
            borderRadius: '8px',
            // borderBottom: 'none',
          },
          '& .RaDatagrid-rowCell': {
            borderBottom: 'none',
          },
        }}
      >
        <Table>
          <TableBody sx={{ margin: 0 }}>
            <TableRow>
              <TableCell key={Math.random(20)}>
                <WrapperField>
                  <TextField source="date" /> {<br />}
                  <TextField source="time" style={{ color: '#ccc' }} />
                </WrapperField>
              </TableCell>
              <TableCell>
                <WrapperField>
                  <FunctionField
                    render={(record) => `${record.total_time / 60} min`}
                  />{' '}
                  {<br />}
                  <FunctionField
                    render={(record) => `${record.distance / 1000} km`}
                    sx={{ color: '#ccc' }}
                  />
                </WrapperField>
              </TableCell>
              <TableCell>
                <WrapperField>
                  <TextField source="start_area" /> {<br />}
                  <TextField source="start_city" style={{ color: '#ccc' }} />
                </WrapperField>
              </TableCell>
              <TableCell>
                <WrapperField>
                  <TextField source="end_area" /> {<br />}
                  <TextField source="end_city" style={{ color: '#ccc' }} />
                </WrapperField>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} sx={{ padding: 0 }}>
                <DriveSpeedField col={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} sx={{ padding: 0 }}>
                <DriveThumbField col={20} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Datagrid>
    </List>
  );
};

export default CustomList;
