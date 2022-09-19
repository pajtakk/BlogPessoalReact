import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokens-reducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

import './navbar.css'

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        alert('Usuário deslogado com sucesso!')
        navigate("/login")
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar className='appbar' position="static">
            <Toolbar className='toolbar' variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        Pajtak
                    </Typography>
                </Box>

                <Box className='navcentro' display="flex" >
                    <Link to="/home" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="postagens" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/temas" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>

    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;