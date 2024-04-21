import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { FC, useState } from "react";
import { Nav } from "./Header.styles";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        Events
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem>
                                <Typography textAlign="center">Новое</Typography>
                                <Typography textAlign="center">Популярное</Typography>
                                <Typography textAlign="center">Категории</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        Events
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Nav>
                            <Link to="/events/new">
                                <Typography textAlign="center">Новое</Typography>
                            </Link>
                            <Link to="/events/popular">
                                <Typography textAlign="center">Популярное</Typography>
                            </Link>                            
                            <Link to="categories">
                                <Typography textAlign="center">Категории</Typography>
                            </Link>

                        </Nav>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>)
}