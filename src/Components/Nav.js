import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'

const pages = ['Home', 'About', 'Services' , 'Registration'];
const ResponsiveAppBar = () => {  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6" 
            sx={{ mr: 2}}
          >SMTLABS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Menu>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`}>
                        {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}                
                sx={{ my: 2, color: 'white', display: 'block' }}>
                 <Link to={`/${page}`} style={{textDecoration:'none'}}>{page}</Link>
              </Button>
            ))}
          </Box>
          </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
