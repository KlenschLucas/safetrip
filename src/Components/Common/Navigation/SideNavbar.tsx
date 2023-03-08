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
import {useRouter} from "next/router";
import logo from '@/data/Logo.png';
import Image from "next/image";

const drawerWidth = 240;

interface Items {
  icon: JSX.Element,
  text: string,
  link: string
}

// TODO: replace icons with svg from figma
const sidebar: Items[] = [{
  icon: <HomeOutlinedIcon/>,
  text: "Dashboard",
  link: "/",
},
  {
    icon: <DirectionsBoatOutlinedIcon/>,
    text: "Shipments",
    link: "/Shipments"
  },
  {
    icon: <ShowChartOutlinedIcon/>,
    text: "Projects",
    link: "/Projects"
  },
  {
    icon: <PeopleAltOutlinedIcon/>,
    text: "Businesses",
    link: "/Businesses"
  },
  {
    icon: <CampaignOutlinedIcon/>,
    text: "News",
    link: "/News"
  },
]
export default function SideNavbar() {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = React.useState("/");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const selectLink = (link: string) => {
    router.push(link);
    setSelectedLink(link);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar><Image src={logo} alt={""} width={240}/></Toolbar>
      <List>
        {sidebar.map((item, index) => (
          <ListItem key={item.text} disablePadding onClick={() => selectLink(item.link)}>
            <ListItemButton className={selectedLink === item.link ? 'active-link' : 'link'}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <>
      <Drawer
        variant="temporary"
        color="primary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          padding: 1
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        color='primary'
        sx={{
          display: {xs: 'none', sm: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          padding: 1
        }}
        open
      >
        {drawer}
      </Drawer>

    </>
  );
}
