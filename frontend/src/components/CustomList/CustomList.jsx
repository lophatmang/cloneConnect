import { Datagrid, FunctionField, List, TextField } from 'react-admin';
import DriveThumbField from './DriveThumbField';
import DriveSpeedField from './DriveSpeedField';
import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Dashboard from '../dashboard/Dashboard';
import { PostFilter } from '../listFilters/ListFilters';
import { useState } from 'react';
import dayjs from 'dayjs';

const styles = {
  listContainer: {
    padding: '0',
    '& .RaList-content': {
      backgroundColor: '#1B2022',
      backgroundImage: 'none',

      opacity: 1,
      borderTop: '1px solid rgba(255, 255, 255, 0.1);',
    },
  },
  dataGrid: {
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
  },
  tableRow: {
    '& .MuiTableCell-root': {
      padding: '18px 32px',
    },
    '& .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },
};

const CustomList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dateFormat = (date) => {
    const newDate = new Date(date);
    const dateFormat = 'dddd, MMM D';
    const startDateObj = dayjs(newDate);
    const startDate = startDateObj.format(dateFormat);

    return startDate;
  };

  return (
    <>
      <Dashboard setShowModal={setShowModal} />
      <List
        sx={styles.listContainer}
        filters={showModal ? <PostFilter setShowModal={setShowModal} /> : null}
        {...props}
      >
        <Datagrid
          isRowSelectable={() => false}
          bulkActionButtons={false}
          sx={styles.dataGrid}
        >
          <Table>
            <TableBody
              sx={{
                margin: 0,
              }}
            >
              <TableRow sx={styles.tableRow}>
                <TableCell key={Math.random(20)}>
                  <Box>
                    <FunctionField
                      source="date"
                      render={(record) => `${dateFormat(record.date)}`}
                      sx={{ fontWeight: 'bold' }}
                    />
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
