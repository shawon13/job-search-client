import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { TbReportSearch } from 'react-icons/tb';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user } = useAuth();
    const pages = <>
        <li className='mx-2.5 px-2 py-2'><Link to='/'>Home</Link></li>
        <li className='mx-2.5 px-2 py-2'><Link to='/alljobs'>All Jobs</Link></li>
        {
            user && <>
                <li className='mx-2.5 px-2 py-2'><Link to='/myjobs'>My Jobs</Link></li>
                <li className='mx-2.5 px-2 py-2'><Link to='/appliedjobs'>Applied Jobs</Link></li>
                <li className='mx-2.5 px-2 py-2'><Link to='/addjob'>Add A Job</Link></li>
            </>
        }
        <li className='mx-2.5 px-2 py-2'><Link to='/blogs'>Blogs</Link></li>
        {
            user ?
                <button className="mx-2.5 px-6 py-2 bg-white text-black rounded">LogOut</button> : <div>
                    <button className="mx-2.5 px-6 py-2 bg-white text-black rounded"><Link to='/login'>Login</Link></button>
                    <button className="mx-2.5 px-6 py-2 bg-white text-black rounded"><Link to='/register'>Register</Link></button>
                </div>
        }
    </>;

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <TbReportSearch className='text-6xl' />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        JobSearch
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}>{pages}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <ul
                            onClick={handleCloseNavMenu}
                            className='flex ml-12'
                        >
                            {pages}
                        </ul>
                    </Box>
                    {
                        user && <Box className="ml-7" sx={{ flexGrow: 0 }}>
                            <Tooltip>
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;