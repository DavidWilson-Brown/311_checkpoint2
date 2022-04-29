import React from "react";
import { Link } from "react-router-dom";
import cookie from "cookie";


import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./entry.module.css";

export default function Entry({ scripts, deleteEntry, user }) {
  console.log(user);
  const cookies = cookie.parse(document.cookie);

  return (
    <div className={styles.container}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "light-gray",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
                width="15%"
              >
                TITLE
              </TableCell>
              <TableCell
                style={{
                  color: "light-gray",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
                width="60%"
              >
                DIALOGUE
              </TableCell>
              <TableCell
                style={{
                  color: "light-gray",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
                width="10%"
              >
                CHARACTER
              </TableCell>
              <TableCell
                style={{
                  color: "light-gray",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
                width="15%"
              >
                PLAYWRIGHT
              </TableCell>
              {cookies.loggedIn ? (
                <TableCell
                  style={{
                    color: "light-gray",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  Delete
                </TableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {scripts.map((script, idx) => (
              <TableRow
                key={script.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/script/${script.id}`} className={styles.title}>
                    {script.title}
                  </Link>
                </TableCell>
                <TableCell>{script.dialogue}</TableCell>
                <TableCell>{script.character}</TableCell>
                <TableCell>{script.playwright}</TableCell>
                {cookies.loggedIn ? (
                  <TableCell>
                    <IconButton
                      onClick={() => deleteEntry(idx)}
                      aria-label="delete"
                      size="medium"
                    >
                      <DeleteIcon className={styles.delete} />
                    </IconButton>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
