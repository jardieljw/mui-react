import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Percent } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuItem from '@mui/material/MenuItem';
import { Input } from '@mui/material';
import { Select } from '@mui/material';
import Upload from './Upload.jsx'
import './App.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme(
  {
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: purple[500],
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  }
);

const currencies = [
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'female',
    label: 'Feminino',
  },
  {
    value: 'notSpecified',
    label: 'Prefiro não especificar',
  },
];

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const isMobile = useMediaQuery('(max-width: 400px)');

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
      <Grid container component="main" sx={{ width: 'auto', height: "100vh" }} >

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
        order={{xs: 2, sm: 1}}>
          <Box
            sx={{
              my: 8,
              mx: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography sx={{
              color: 'rgba(94, 32, 117, 1)', fontFamily: 'Roboto', fontSize: '48px', fontWeight: 'bold', lineHeight: '56px', letterSpacing: '0em',
            }}>
              Registrar
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} 
            sx={{ 
            mt: 1, 
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center'
            }}
            >
            <TextField
                sx={{ bgcolor: 'background.paper',
                boxShadow: 10,
                borderRadius: 10,
                p: 0,
                minWidth: 300,
                width: '45vh',
                borderWidth: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  outlineColor: 'red',
                  borderRadius: '50px',
                  borderWidth: '0px'
                }
                }}
                margin="normal"
                required
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                variant='outlined'
                autoFocus
              />
              <TextField
                sx={{ bgcolor: 'background.paper',
                boxShadow: 10,
                borderRadius: 10,
                p: 0,
                minWidth: 300,
                width: "45vh",
                border: '0px solid rgba(218 14 14 / 42%)',
                borderWidth: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '50px',
                  borderWidth: '0px'
                }
              }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
                variant='outlined'
              />
              
              <TextField
                sx={{ bgcolor: 'background.paper',
                boxShadow: 10,
                borderRadius: 10,
                p: 0,
                minWidth: 300,
                width: '45vh',
                border: '0px solid rgba(218 14 14 / 42%)',
                borderWidth: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '50px',
                  borderWidth: '0px'
                }
              }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                sx={{ bgcolor: 'background.paper',
                boxShadow: 10,
                borderRadius: 10,
                p: 0,
                minWidth: 300,
                width: '45vh',
                border: '0px solid rgba(218 14 14 / 42%)',
                borderWidth: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '50px',
                  borderWidth: '0px'
                }
              }}
                margin="normal"
                required
                name="password2"
                label="Confirme a Senha"
                type="password"
                id="password2"
                autoComplete="current-password"
              />
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-evenly', mt: 1 }}>
                <TextField 
                  sx={{ 
                    bgcolor: 'background.paper',
                    width: '22vh',
                    boxShadow: 10,
                    borderRadius: 10,
                    p: 0,
                    m: 0.5,
                    border: '0px solid rgba(218 14 14 / 42%)',
                    borderWidth: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '50px',
                      borderWidth: '0px'
                    }
                    
                  }}
                  margin='normal'
                  id="outlined-select-currency"
                  select
                  label="Sexo"
                  defaultValue="male"
                >
                  {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>


                <Upload />

              </Box>
              <Button
                type="submit"
                variant="contained" 
                size="medium"
                borderRadius='50%'
                sx={{ mt: 3, mb: 2, borderRadius:"50px", p:1.5, textTransform:'none', width:"250px", height:"50px", }}
              >
                Registrar-se
              </Button>
              <Grid container>
                <Grid alignSelf={'center'} item xs
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '1vh' }}
                >
                  <Link href="#" variant="body2">
                    Já possui conta?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          order={{xs: 1, sm: 2, md:7}}
          sx={{
          }}
          style={{
            background: 'linear-gradient(180deg, #75206C 44.69%, #FE690E 100%)',
          }}
        >   
            <Box
            sx={{ 
              my: 0,
              mx: 0,
              backgroundSize: `auto 750px`,
              backgroundImage: 'url(../src/assets/logo_sem.png)',
              backgroundRepeat: "no-repeat",
              backgroundPositionX: 'center',
              height: "100%",
              width: "100%",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >   
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <br/> <br/> 
            <br/> <br/> 
            <br/> <br/> 
            <br/> <br/> 
            <br/> <br/>
              <Typography
                  style={{
                  
                  align: 'center',
                  fontFamily: 'Roboto',
                  fontSize: '48px',
                  letterSpacing: '0em',
                  textAlign: 'center', 
                  color: 'rgba(254, 252, 255, 1)',
                }}
              >
                Venha fazer parte da
                maior rede social também!
                </Typography>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignUp;