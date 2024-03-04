"use client";

import React, { useEffect } from 'react'
import Table from '@mui/joy/Table';
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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const CustomDrawerMobilNav = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <List>
                        {['hakkımızda', 'hizmetler', 'ürülerimiz', 'iletişim'].map((text) => (
                            <ListItemButton key={text}>
                                <Typography variant="h6">{text}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export { CustomDrawerMobilNav }

const WhatsApp = () => {
    return (
        <div 
            className='fixed flex flex-col items-center cursor-pointer bottom-10 right-10 text-green-500 hover:text-green-700 animate-bounce'
            onClick={() => window.open('https://wa.me/905354231662' , '_blank')}
        >
            <WhatsAppIcon sx={{ fontSize: 50 }} />
            <p>WhatsApp</p>
        </div>
    )
}

export { WhatsApp }

export function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

export const TeklifAl = ({props, variant, isSuitForMobile}) => {
    return (
        <LoadingButton
            variant={variant}
            color='success'
            loading={false}
            onClick={() => window.open('https://wa.me/905354231662' , '_blank')}
            className={`text-white bg-green-500 hover:bg-green-700 ${isSuitForMobile && 'hidden lg:block'}`}
        >
            TEKLİF AL
        </LoadingButton>
    )
}

export const SliderPicture = ({data}) => {
    const [current, setCurrent] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === data.length - 1 ? 0 : current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

    return (
        <section className="relative h-96  w-full lg:h-screen">
            {data.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'opacity-100' : 'opacity-0'}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide.image}
                                alt="Picture of the author"
                                width={200}
                                height={200}
                                className='object-cover w-full h-full absolute top-0 left-0'
                            />
                        )}
                    </div>
                );
            })}
            <KeyboardArrowLeftIcon
                onClick={prevSlide}
                className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer'
                sx={{ fontSize: 120 }}
            />

            <KeyboardArrowRightIcon
                onClick={nextSlide}
                className='absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer'
                sx={{ fontSize: 120 }}
            />
        </section>
    );
}