"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { TextField, Button } from "@mui/material";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    // попытка авторизоваться
    e.preventDefault();
    console.log(login, password);
  };
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-container"]}>
        <h1>Пожалуйста, пройдите процесс авторизации!</h1>
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <TextField
            id="login"
            label="login"
            variant="standard"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" type="submit">Войти</Button>
        </form>
      </div>
    </div>
  );
}
