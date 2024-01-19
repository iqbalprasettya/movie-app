import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { callAPI } from "../../domain/CallAPI";
import classes from "./style.module.scss";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 3,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await callAPI("/movie", "GET");
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.tableTitle}>
                <TableCell align="center">Title</TableCell>
                {/* <TableCell align="center">Description</TableCell> */}
                <TableCell align="center">Duration</TableCell>
                <TableCell align="center">Genre</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center">Release Year</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {data.title}
                    </TableCell>
                    {/* <TableCell align="center">{data.desc}</TableCell> */}
                    <TableCell align="center">
                      {data.duration} minutes
                    </TableCell>
                    <TableCell align="center">{data.genre}</TableCell>
                    <TableCell align="center">{data.rating}/10</TableCell>
                    <TableCell align="center">{data.releaseYear}</TableCell>
                    <TableCell align="center" className={classes.action}>
                      <Link to={`/detail/${data.id}`}>
                        <Button variant="contained">Detail</Button>
                      </Link>

                      <div>
                        <Button
                          className={classes.deleteButton}
                          onClick={handleOpen}
                        >
                          Delete
                        </Button>
                        <Modal
                          BackdropProps={{
                            style: {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                            },
                          }}
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="parent-modal-title"
                          aria-describedby="parent-modal-description"
                        >
                          <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">Delete</h2>
                            <p id="parent-modal-description">
                              Are you sure want to delete this account?
                            </p>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button
                              onClick={() => {
                                CallAPI(`/movie/${data.id}`, "DELETE"),
                                  window.location.reload();
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Modal>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
