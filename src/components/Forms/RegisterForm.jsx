import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import Link from '@mui/material/Link';
import Upload from '../../Upload';
import Grid from '@mui/material/Grid';

const RegisterForm = () => {
    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit}
                sx={{
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <TextField
                    sx={{
                        bgcolor: 'background.paper',
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
                    sx={{
                        bgcolor: 'background.paper',
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
                    sx={{
                        bgcolor: 'background.paper',
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
                    sx={{
                        bgcolor: 'background.paper',
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
                    sx={{ mt: 3, mb: 2, borderRadius: "50px", p: 1.5, textTransform: 'none', width: "250px", height: "50px", }}
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
        </>
    )
}

export default RegisterForm