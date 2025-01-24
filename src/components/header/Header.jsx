import React from 'react'
import {Box, styled, Typography} from '@mui/material'

export default function Header() {
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
  return (
      <Box>
        <Box>
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
        <Box>
            <NavBarLink variant='body2'>                            {/*li*/}
                 Sign Up                         
            </NavBarLink>
            <CustomButton/>
        </Box>
      </Box>
  )
}
