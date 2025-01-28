import React from 'react'
import { styled } from '@mui/material'
import {Box, Typography} from '@mui/material';
import CustomButton from '../../components/custom button/CustomButton'
import {Container, textAlign} from '@mui/system';

function Welcome() {
    const CustomBox = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap : theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },

    }));

    const Title = styled (Typography)(({theme})=>({
        fontSize: "36px",
        fontWeight: "bold",
        color: "black",
        [theme.breakpoints.down("md")]:{
            fontSize: "24px",
        },
    }))

  return (
    <>
      <Container>
        <CustomBox>
            <Box sx={{felx: "1"}}>
                <Typography avriant="body2"
                    sx={{
                        fontSize:"14px",
                        color:"black",
                        fontWeight: "light"
                    }}
                >
                    Welcome the Our Food
                </Typography>
                <Title variant="h1">
                    Discover a place you'll love to Eat.
                </Title>
                <Typography variant='body2'
                    sx={{
                        fontSize:"12px",
                        color:"black",
                        fontWeight: "light"
                    }}
                >
                    Immerse yourself in the elegancy of our food
                </Typography>
                <CustomButton
                    backgroundColor="blue"
                    color="white"
                    buttonText="More About Us"
                    welcomeBtn={true}
                />
            </Box>
            <Box sx={{flex:"1,25"}}>

            </Box>
        </CustomBox>
      </Container>
    </>
  )
}
export default Welcome;
