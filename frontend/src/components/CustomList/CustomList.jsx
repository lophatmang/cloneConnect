import { Datagrid, FunctionField, List, TextField } from 'react-admin';
import DriveThumbField from './DriveThumbField';
import DriveSpeedField from './DriveSpeedField';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Dashboard from '../dashboard/Dashboard';
const CustomList = () => {
  return (
    <>
      <Dashboard />
      <List
        sx={{
          // background: '#1B2022',
          padding: '0',
          '& .RaList-actions': {
            display: 'none',
          },
          '& .RaList-content': {
            backgroundColor: '#1B2022',
            backgroundImage: 'none',

            opacity: 1,
            borderTop: '1px solid rgba(255, 255, 255, 0.1);',
          },
        }}
      >
        <Datagrid
          isRowSelectable={() => false}
          bulkActionButtons={false}
          sx={{
            '& .RaDatagrid-thead': {
              display: 'none',
            },
            '& .RaDatagrid-row': {
              display: 'block',
              margin: '16px',
              background: 'linear-gradient(to top, #1A1E20FF, #2E363A)',
              borderRadius: '8px',
              width: '100%',
              overflow: 'hidden',
              // borderBottom: 'none',
            },
            '& .RaDatagrid-rowCell': {
              borderBottom: 'none',
              display: 'block',
              width: '100% !important',

              padding: 0,
            },
          }}
        >
          <Table>
            <TableBody
              sx={{
                margin: 0,
              }}
            >
              <TableRow
                sx={{
                  '& .MuiTableCell-root': {
                    padding: '18px 32px',
                  },
                  '& .MuiBox-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  },
                }}
              >
                <TableCell key={Math.random(20)}>
                  <Box>
                    <TextField source="date" sx={{ fontWeight: 'bold' }} />
                    <TextField source="time" />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <FunctionField
                      render={(record) => `${record.total_time / 60} min`}
                      sx={{ fontWeight: 'bold' }}
                    />{' '}
                    <FunctionField
                      render={(record) => `${record.distance / 1000} km`}
                      // sx={{ color: '#ccc' }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <TextField
                      source="start_area"
                      sx={{ fontWeight: 'bold' }}
                    />
                    <TextField source="start_city" />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <TextField source="end_area" sx={{ fontWeight: 'bold' }} />
                    <TextField source="end_city" />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    '&.MuiTableCell-body': {
                      padding: 0,
                    },
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    sx={{ fontSize: 40, opacity: 0.2 }}
                  />
                </TableCell>
              </TableRow>
              {/* Speed */}
              <TableRow>
                <TableCell colSpan={6} sx={{ padding: 0 }}>
                  <DriveSpeedField col={20} />
                </TableCell>
              </TableRow>
              {/* Thumb */}
              <TableRow>
                <TableCell colSpan={6} sx={{ padding: 0 }}>
                  <DriveThumbField col={20} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Datagrid>
      </List>
    </>
  );
};

export default CustomList;
