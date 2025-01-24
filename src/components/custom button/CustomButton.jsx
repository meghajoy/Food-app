import React from 'react'
import {styled, Button} from '@mui/material'        //importing button from @mui
const CustomButton =({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartedBtn,
}) =>{const CustomButton = styled(Button)(({theme})=>({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor
    },
    [theme.breakpoints.down("md")]:{
      margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStartedBtn) && "50%",
    },
}))

return (
  <CustomButton>
    {buttonText}
  </CustomButton>
);

}

export default CustomButton;
