import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';  // ✅ Add useLocation

const drawerWidth = 240;

const navItems = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Services', route: '/services' },
  { name: 'Work', route: '/work' },
  { name: 'Client', route: '/client' },
  { name: 'Blog', route: '/blog' },
  { name: 'Contact', route: '/contact' },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // ✅ Get current route

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (route) => {
    navigate(route);
    setMobileOpen(false); // Close drawer on navigation
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DANIELS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                color: location.pathname === item.route ? 'blue' : 'black',  // ✅ Set active color
              }}
              onClick={() => handleNavClick(item.route)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, color: '#000' }}
          >
            DANIELS
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.route)}
                sx={{
                  color: location.pathname === item.route ? 'blue' : 'black',  // ✅ Set active color
                  fontWeight: location.pathname === item.route ? 'bold' : 'normal',
                  mx: 1,  // margin between buttons
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Header;
