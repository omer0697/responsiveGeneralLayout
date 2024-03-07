"use client";

import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Link from 'next/link';

const MENUITEMS = [
  {
    text: 'Ana Sayfa',
    href: '/',
  },
  {
    text: 'Hakkımızda',
    href: '/about',
  },
  {
    text: 'Referanslarımız',
    href: '/references',
  },
  {
    text: 'İletişim',
    href: '/contact',
  },
];

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);
  
  function clickedLink() {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <IconButton 
        variant="outlined" 
        onClick={() => setOpen(true)}
        className='text-white text-sm font-semibold px-4 z-10'
        >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            Kapat
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' , marginTop: 2,},
          }}
        >
          {MENUITEMS.map((item) => (
            <ListItemButton key={item.text
            } >
              <Link 
                onClick={clickedLink}
                href={item.href} 
              >
                {item.text}
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
