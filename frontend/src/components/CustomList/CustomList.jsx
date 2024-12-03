import {
  Datagrid,
  FunctionField,
  InfiniteList,
  List,
  TextField,
} from 'react-admin';
import DriveThumbField from './DriveThumbField';
import DriveSpeedField from './DriveSpeedField';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Dashboard from '../dashboard/Dashboard';
import { PostFilter } from '../listFilters/ListFilters';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

const CustomList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const isSmall = useMediaQuery('(max-width: 600px)');

  const dateFormat = (date) => {
    const newDate = new Date(date);
    const dateFormat = !isSmall ? 'dddd, DD, MMMM' : 'DD, MMMM';
    const startDateObj = dayjs(newDate);
    const startDate = startDateObj.locale('vi').format(dateFormat);

    return startDate;
  };

  const styles = {
    listContainer: {
      padding: '0',
      '& .RaList-content': {
        backgroundColor: '#1B2022',
        backgroundImage: 'none',
        paddingBottom: '12px',
        opacity: 1,
        borderTop: '1px solid rgba(255, 255, 255, 0.1);',
      },
      '& .css-emrlq1': {
        padding: 0,
      },
    },
    dataGrid: {
      '& .RaDatagrid-thead': {
        display: 'none',
      },
      '& .RaDatagrid-row': {
        display: 'block',
        margin: '12px 16px',
        background: 'linear-gradient(to top, #1A1E20FF, #2E363A)',
        borderRadius: '8px',
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
        padding: !isSmall ? '18px 32px' : '8px 16px',
      },
      '& .MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    },
  };

  return (
    <>
      <Dashboard setShowModal={setShowModal} />
      <InfiniteList
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
                <TableCell key={Math.random(20)} width={'25%'}>
                  <Box>
                    <FunctionField
                      source="date"
                      render={(record) => `${dateFormat(record.date)}`}
                      sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                    />
                    <FunctionField
                      render={(record) =>
                        `${record.start_time} - ${record.end_time}`
                      }
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <FunctionField
                      render={(record) => `${record.total_time / 60} phút`}
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
                {!isSmall && (
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
                )}
              </TableRow>
              {/* Speed */}
              <TableRow>
                <TableCell colSpan={6} sx={{ padding: 0 }}>
                  <DriveSpeedField col={40} />
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
      </InfiniteList>
    </>
  );
};

export default CustomList;
