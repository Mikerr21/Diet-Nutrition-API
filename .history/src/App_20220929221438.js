import React from "react";
import 'axios' from "axios"
import { useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { CssBaseline } from "@mui/material";
import { FastForward } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Input } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function App() {
  const [name, setName] = useState('');
	const [res, setRes] = useState("");
  const fetchData = ()=>{ axios.get("https://api.calorieninjas.com/v1/nutrition?query=tomato", {
    "method": "GET",
    "headers": {
      "X-Api-Key": "AFLlI8M6Jy226TwL1WMZ25fmAEGKQNcvjl722zDs"
    }
  })
  .then(response => {
    console.log(response);
    
  })
  // .then( response=>{
  //   setRes(response.data.items[0]);
  // })
  .catch(err => {
    console.error(err);
  });}

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense" color="black">
          <FastfoodIcon />
          <Box m={1} pt={1}>
            <Typography
              variant="h4"
              color="white"
              align="center"
              component="div"
            >
              SIMPLE FOOD SEARCH & CALCULATOR
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="3vh"
      >
        
        <Input placeholder="Enter Name of Any Food" onChange={e => setName(e.target.value)}></Input>
        <Button
          onClick={fetchData()}
          sx={{
            height: 33,
          }}
          variant="outlined"
        >
          Search
        </Button>
      </Box>
      
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="10vh"
        
      >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NUTRIENT (100g serving)</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
									<TableCell>
										Protein (mg)
									</TableCell>
                  <TableCell align="center">
                   X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Carbohydrates (g)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Chlosterol (mg)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Total Fat (g)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Sugar (mg)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Potassium (mg)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Sodium (mg)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
        <TableRow>
									<TableCell>
										Calories (mg)
									</TableCell>
                  <TableCell align="center">
										X
									</TableCell>
								</TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </div>
  );
}

export default App;
