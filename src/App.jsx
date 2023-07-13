import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { useState } from 'react';
import { PhotoCamera } from '@mui/icons-material';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default App
