'use client';
import React, { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HotelIcon from '@mui/icons-material/Hotel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 260;

const menuItems = [
  { text: 'لوحة القيادة', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'الحجاج والمعتمرين', icon: <PeopleIcon />, path: '/dashboard/pilgrims' },
  { text: 'المجموعات والرحلات', icon: <GroupWorkIcon />, path: '/dashboard/groups' },
  { text: 'التأشيرات', icon: <DocumentScannerIcon />, path: '/dashboard/visas' },
  { text: 'الفنادق والغرف', icon: <HotelIcon />, path: '/dashboard/hotels' },
  { text: 'الوكلاء الفرعيون', icon: <BusinessCenterIcon />, path: '/dashboard/agents' },
  { text: 'المالية والفواتير', icon: <ReceiptIcon />, path: '/dashboard/finance' },
  { text: 'الإعدادات', icon: <SettingsIcon />, path: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
        <Typography variant="h5" component={Link} href="/" sx={{ fontWeight: 'bold', color: 'primary.main', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="span" sx={{ fontSize: '1.8rem' }}>🕋</Box> مناسك
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ px: 2, pt: 2 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={item.path}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? 'primary.light' : 'transparent',
                  color: isActive ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.main' : 'rgba(0,0,0,0.04)',
                  },
                  '& .MuiListItemIcon-root': {
                    color: isActive ? 'white' : 'inherit',
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={<Typography sx={{ fontWeight: isActive ? 'bold' : 'normal' }}>{item.text}</Typography>} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        }}
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
          <Box sx={{ flexGrow: 1 }} />
          
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <NotificationsIcon />
          </IconButton>
          
          <IconButton
            onClick={handleMenu}
            color="inherit"
            sx={{ p: 0 }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>W</Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>الملف الشخصي</MenuItem>
            <MenuItem onClick={handleClose} component={Link} href="/">
              <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
              تسجيل الخروج
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: '1px solid rgba(0,0,0,0.08)' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: 8 }}
      >
        {children}
      </Box>
    </Box>
  );
}
