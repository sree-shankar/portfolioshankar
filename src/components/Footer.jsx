import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@emotion/react';

// Define the keyframes for the animation
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;



const Footer = () => {
    const theme = useTheme()
    return (

        <Container maxWidth="lg">
            <div className='footer-div' >
                <Box className="box-footer-1" mb={2} >
                    <div className='custom-download-cv-web-6' style={{ backgroundColor: "#3178C6" }}>
                        <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Get in touch</Typography>
                    </div>
                </Box>

                <Box mb={4}>

                    <Typography variant="subtitle2" className='subtitle2-variant'>
                        What’s next? Feel free to reach out to me if you're looking for a developer,
                    </Typography>
                    <Typography variant="subtitle2" className='subtitle2-variant'>
                        have a query, or simply want to connect.
                    </Typography>

                </Box>

                <Box className="box-footer-2" mb={1}>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <MailOutlineIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF",   
                        '&.hovered': {   animation: `${bounceAnimation} 0.5s ease`,  }, }} className="icon-mail"/>
                        <a href="mailto:mmsreeshankar@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h2" className='h2-variant'
                                 onMouseEnter={() => document.querySelector('.icon-mail').classList.add('hovered')}
                                 onMouseLeave={() => document.querySelector('.icon-mail').classList.remove('hovered')}
                            >
                                mmsreeshankar@gmail.com
                            </Typography>
                        </a>
                        <ContentCopyIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </Stack>
                </Box>

                <Box className="box-footer-2" mb={3} >
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <LocalPhoneOutlinedIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF",
                            '&.hovered': {   animation: `${bounceAnimation} 0.5s ease`,  }, }} className="icon-phone"/>
                        <a href="tel:+919994904553" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h2" className='h2-variant'
                         onMouseEnter={() => document.querySelector('.icon-phone').classList.add('hovered')}
                         onMouseLeave={() => document.querySelector('.icon-phone').classList.remove('hovered')}
                        >9994904553</Typography>
                        </a>
                        <ContentCopyIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </Stack>
                </Box>

                <Box className="box-footer-2" mb={5}>
                   <Stack direction="row" spacing={2} alignItems={"center"}>
                      <LinkedInIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF",
                      '&.hovered': {   animation: `${bounceAnimation} 0.5s ease`,  }, }} className="icon-linkedin"/>
                       <a href="https://www.linkedin.com/in/contact-sreeshankar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography variant="h2" className='h2-variant'
                          onMouseEnter={() => document.querySelector('.icon-linkedin').classList.add('hovered')}
                          onMouseLeave={() => document.querySelector('.icon-linkedin').classList.remove('hovered')}
                       >LinkedIn</Typography>
                       </a>
                       <ContentCopyIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />

                     </Stack>
               </Box>


            </div>
        </Container>

    )
}
export default Footer
