import { Button } from "react-admin";
import classes from "./AddNew.module.css";
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AddNew(props) {
  const refShow = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") hideModal();
      },
      true
    );
  }, []);

  const styles = {
    modalInput: {
      "& .MuiInputBase-input": {
        padding: "3px 2px",
      },
      "& .MuiInputBase-root": {
        borderRadius: 0,
        bgcolor: "#000",
      },
      "& form": {
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start!important",
        paddingLeft: "20px",
        gap: "15px",
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
    },
    closeButton: {
      color: "white",
      bgcolor: "#5B696E",
      padding: "8px 16px",
      "& .MuiButton-icon": {
        margin: 0,
      },
    },
  };

  const hideModal = () => {
    props.setShow(false);
    navigate("/drives");
  };

  return (
    <Box
      className={classes.modal}
      onClick={(e) => {
        if (refShow.current && !refShow.current.contains(e.target)) {
          hideModal();
        }
      }}
    >
      <Box ref={refShow} className={classes.modalContent}>
        <Box className={classes.modalInput} sx={styles.modalInput}>
          <img style={{ width: "300px" }} src="qr.jpg" alt="" />
        </Box>
        <Typography>Quét QR để thêm thiết bị</Typography>
        <Box sx={styles.buttonContainer}>
          <Button onClick={() => hideModal()} sx={styles.closeButton}>
            CLOSE
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
