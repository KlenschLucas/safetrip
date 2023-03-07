import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import SideNavbar from "@/Components/Common/Navigation/SideNavbar";
import Header from "@/Components/Common/Navigation/Header";

const drawerWidth = 240;

interface MainLayoutProps {
  title: string;
  children: any;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <Header title={props.title}/>
      <Box
        component="nav"
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        aria-label="mailbox folders"
      >
        <SideNavbar/>
      </Box>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
      >
        {props.children}
      </Box>
    </Box>
  );
}
