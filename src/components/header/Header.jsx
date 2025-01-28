import React, { useState } from 'react'
import {Box, styled, Typography} from '@mui/material'
import CustomButton from '../custom button/CustomButton'
import LogoImg from "../../images/gradient-restaurant-logo-design-b.png"

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import{
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
export default function Header() {

    const [menuIcon,setMenuIcon] = useState({left:false})

    //toggleDrawer function
    const toggleDrawer =(anchor,open)=>(event)=>{
        if(event.type === "keydown" && (event.type === "shift" || event.type === "tab")){
            return;
        }
        setMenuIcon({...menuIcon,[anchor]:open})
    }

    //list function
    const list = (anchor) =>(
        <Box
            sx={{
                width: anchor=== "top" || anchor === "bottom" ? "auto": 250
            }}
            //role = "presentation"
            onClick={toggleDrawer(anchor,false)}
            onKeyDown= {toggleDrawer(anchor,false)}
        >
            
            <List>
                {
                    nav_titles.map((item,index)=>(
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 && <HomeIcon />
                                }
                                {
                                    index === 1 && <FeaturedPlayListIcon />
                                }
                                {
                                    index === 2 && <MiscellaneousServicesIcon />
                                }
                                {
                                    index === 3 && <ContactsIcon />
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
    
    //JSON format to map
    const nav_titles =[                                     
        {
            path:'/',
            display:'Home'
        },
        {
            path:'/',
            display:'Dishes'
        },
        {
            path:'/',
            display:'Services'
        },
        {
            path:'/',
            display:'About Us'
        }
    ]

    //Styling the nav by name it NavBarLinksBox
    //styled(what_needs_to_be_styled)((function{optional_theme})=>({object}))
    //theme - built in variable to do responsives
    const NavBarLinksBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display:'none'
        }
    }))

    //Styling the Typography
    const NavBarLink = styled(Typography)(()=>({
        fontSize: "18px",
        color: 'blue',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover':{
            color:"white"
        }

    }))

    //Styling MenuIcon
    const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
        cursor: 'pointer',
        display:'none',
        [theme.breakpoints.down("md")]:{
            display:'block',
        },
    }))

    //Styling image
    const NavBarLogo = styled("img")(({theme})=>({
        display:'flex',
        cursor: 'pointer',
        height:"100px",
        width:"100px",
        [theme.breakpoints.down("md")]:{
            display:'none',
        }
    }))

  return (
      <Box
      sx={{                            
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:"40px",
        maxWidth:'auto',
        borderRadius: '5px',
        marginleft: '0%'
    }}
      
      >
        
        <Box
            sx={{                            
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CustomMenuIcon onClick={toggleDrawer("left",true)}/>
            <Drawer
                anchor="left"
                open={menuIcon["left"]}
                onClose = {toggleDrawer("left",false)}
            >
                {list("left")}
            </Drawer>
            <Box
                sx={{
                    height: '1px',
                    width: '1px'
                }}
            >
                <NavBarLogo src={LogoImg} />
            </Box>

            <NavBarLinksBox>                                               {/*ul*/}
                {
                    nav_titles.map((item,index)=>(              
                        <NavBarLink variant='body2'>                            {/*li*/}
                            {item.display}                          
                        </NavBarLink>
                    ))
                }
            </NavBarLinksBox>
        </Box>
        <Box
            sx={{                            
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <NavBarLink variant='body2'>                            {/*li*/}
                 Sign Up                         
            </NavBarLink>
            <CustomButton
                backgroundColor="red"
                color= "white"
                buttonText="Register"
            />
            
        </Box>
      </Box>
  )
}
