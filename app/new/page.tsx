"use client";

import styles from "./page.module.css";
import {
  TextField,
  Button,
  Snackbar,
  SnackbarCloseReason,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

export default function New() {
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [problemText, setProblemText] = useState("");

  // обработчик отправки формы
  const handleSubmit = (e: React.SyntheticEvent) => {
    // SyntheticEvent -  базовый тип для всех событий в React
    e.preventDefault();
    setOpen(true);
    console.log(
      "заявка с такими полями:\n" +
        clientName +
        "\n" +
        phone +
        "\n" +
        address +
        "\n" +
        problemText,
    );
  };

  const [open, setOpen] = useState(false);

  const handleClose = (
    e: Event | React.SyntheticEvent,
    reason: SnackbarCloseReason,
  ) => {
    console.log(reason);
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={styles["new-page"]}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles["new-form"]}>
        <h2>Создание заявки</h2>
        <TextField
          id="client-name"
          label="client name"
          variant="standard"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <TextField
          id="phone"
          label="phone"
          variant="standard"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          id="address"
          label="address"
          variant="standard"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <TextField
          id="problem-text"
          label="problem text"
          multiline
          rows={4}
          variant="standard"
          value={problemText}
          onChange={(e) => setProblemText(e.target.value)}
          required
        />

        <Button variant="contained" type="submit">
          Отправить заявку
        </Button>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Заявка успешно создана!
        </Alert>
      </Snackbar>
    </div>
  );
}
