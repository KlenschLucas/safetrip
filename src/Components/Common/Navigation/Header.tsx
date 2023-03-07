import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";

const drawerWidth = 240;

interface Props {
  title?: string
}

export default function Header(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`},
      }}

    >
      <Toolbar disableGutters>
        <Typography variant="h1" noWrap component="div">
          {props.title}
        </Typography>

        <Box sx={{flexGrow: 0}}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>

          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//
// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
//
//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };
//
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
