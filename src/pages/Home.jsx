import { Grid, Stack, Typography, Container, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { avatarCircle, handyhifi, mobileavatar, online } from '../images/images'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Toolbarstyle } from '../theme/helpertheme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';



const Home = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:599px)');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <Box component={"main"} className="">
      <Toolbarstyle />
    <Container maxWidth="lg" sx={{marginTop: {xs: 8 ,sm: 6 , md:10}, marginBottom: {xs: 1 ,sm: 2 , md:1}} } >
      <div className='home-div-home' >

        <Grid container spacing={2} sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}>

          <Grid item xs={12} md={9} pl={2} data-aos="flip-up">
              <Typography variant='h1'  className='h1-font-smallscreen' data-aos="zoom-in">Hi, I'm Sree Shankar
              <img src={handyhifi} alt='wave'  className='wave-imageone' />
              </Typography>

            <div className='home-div-content'>
              <Box>
                <Typography variant='h6' mt={2} textAlign={{ xs: "flex-start", md: "unset" }} pl={0.5}>
                I'm a Front-End Developer with 3 years of experience specializing in React.js. I focus on creating exceptional
                 digital experiences that are fast, accessible, visually appealing, and responsive. 
                Despite being relatively new to the field, my passion for web development drives me 
                to continuously learn and take on new challenges.
                </Typography>
              </Box>
            </div>
            <div className='div-home-location'>
              <Stack direction={"row"} gap={1} alignItems={"center"} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}  >
                <FmdGoodOutlinedIcon width={7} height={10} sx={{color: theme?.palette?.mode  === "dark" && "#FFFFFF" }} />
                <Typography variant='h6'  >
                  Marthandam,Kanniyakumari, TN
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={2} alignItems={"center"} mt={1} ml={1} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}>
                <img src={online} alt="online" width={10} height={10} />
                <Typography variant='h6'  >
                  Available for new projects
                </Typography>
              </Stack>
            </div>

          </Grid>
          <Grid item xs={12} md={3} display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}  data-aos="zoom-in-up">
              <img src={isMobile ? mobileavatar: avatarCircle} alt='avatarcircle' className='avatarcircle-img' /> 
          </Grid>

        </Grid>

      </div>
     
    </Container>
    </Box>
  )
}

export default Home