import { Button, DateInput, Filter } from 'react-admin';
import classes from './ListFilters.module.css';
import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

export function PostFilter(props) {
  const refShow = useRef();

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') props.setShowModal(false);
      },
      true
    );
  }, []);

  const styles = {
    modalInput: {
      '& .MuiInputBase-input': {
        padding: '3px 2px',
      },
      '& .MuiInputBase-root': {
        borderRadius: 0,
        bgcolor: '#000',
      },
      '& form': {
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start!important',
        paddingLeft: '20px',
        gap: '15px',
      },
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
    },
    closeButton: {
      color: 'white',
      bgcolor: '#5B696E',
      padding: '8px 16px',
      '& .MuiButton-icon': {
        margin: 0,
      },
    },
  };

  return (
    <Box
      className={classes.modal}
      onClick={(e) => {
        if (refShow.current && !refShow.current.contains(e.target)) {
          props.setShowModal(false);
        }
      }}
    >
      <Box ref={refShow} className={classes.modalContent}>
        <Box className={classes.modalInput} sx={styles.modalInput}>
          <Box className={classes.modalLabel}>
            <Typography>Từ ngày:</Typography>
            <Typography>Đến ngày:</Typography>
          </Box>
          <Filter {...props}>
            <DateInput label={false} source="dateStart" alwaysOn />

            <DateInput label={false} source="dateEnd" alwaysOn />
          </Filter>
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button
            onClick={() => props.setShowModal(false)}
            sx={styles.closeButton}
          >
            CLOSE
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
