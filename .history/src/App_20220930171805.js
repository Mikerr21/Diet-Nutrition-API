import React from "react";
import {useEffect} from "react"
import axios from "axios";
import { useState } from "react";
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

 const fetchData =  async ()=> {
  
  axios.get('https://api.calorieninjas.com/v1/nutrition?query=' + name , { 
    headers: {
       "X-Api-Key": "AFLlI8M6Jy226TwL1WMZ25fmAEGKQNcvjl722zDs"
      }
    })
  .then(response => {
    setRes(response.data.items[0])
    console.log(response.data.items[0]);
  }) 
}


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
                  {res.protein_g}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Carbohydrates (g)
									</TableCell>
                  <TableCell align="center">
										{res.carbohydrates_total_g}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Chlosterol (mg)
									</TableCell>
                  <TableCell align="center">
										{res.chlosterol_mg}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Total Fat (g)
									</TableCell>
                  <TableCell align="center">
										{res.fat_total_g}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Sugar (mg)
									</TableCell>
                  <TableCell align="center">
										{res.sugar_g}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Potassium (mg)
									</TableCell>
                  <TableCell align="center">
										{res.potassium_mg}
									</TableCell>
								</TableRow>
                <TableRow>
									<TableCell>
										Sodium (mg)
									</TableCell>
                  <TableCell align="center">
										{res.sodium_mg}
									</TableCell>
								</TableRow>
        <TableRow>
									<TableCell>
										Calories (mg)
									</TableCell>
                  <TableCell align="center">
										{res.calories}
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
