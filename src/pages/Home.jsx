import { Grid, Stack, Typography, Container, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { avatarCircle, handyhifi, mobileavatar, online } from '../images/images'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Toolbarstyle } from '../theme/helpertheme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Containere = styled.div`
  display: grid;
  height: 50vh;
  place-items: center;
  /* overflow: hidden; */
  background-color: black;
  --circleDiameter: 300px;
  --planets: calc(var(--circleDiameter) / 5);
`;

const HeroCircle = styled.div`
  position: relative;
  width: var(--circleDiameter);
  height: var(--circleDiameter);
`;

const InnerImage = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 10px;
  width: 200px;
  height: 200px;
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

const HeroRotate = styled.div`
  position: relative;
  top: -7px;
  left: -7px;
  width: 100%;
  height: 100%;
  /* border: 1px solid white; */
  border-radius: 100%;
  animation: ${rotateAnimation} 30s linear infinite;
`;

const maintainAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(-360deg); }
`;

const 
Planet = styled.div`
  position: absolute;
  width: var(--planets);
  aspect-ratio: 1;
  border-radius: 100%;
  animation: ${maintainAnimation} 30s linear infinite;

  &:nth-child(1) {
    top: calc(-1 * var(--planets) / 2);
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
  }
  &:nth-child(2) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    right: calc(-1 * var(--planets) / 2);
  }
  &:nth-child(3) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    left: calc(-1 * var(--planets) / 2);
  }
  &:nth-child(4) {
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    bottom: calc(-1 * var(--planets) / 2);
  }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const PlanetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 1px solid white; */
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: ${scaleAnimation} 1s linear infinite alternate;
`;



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
              {/* <img src={isMobile ? mobileavatar: avatarCircle} alt='avatarcircle' className='avatarcircle-img' />  */}
              <Containere>
      <HeroCircle>
        <InnerImage
          src={isMobile ? mobileavatar: avatarCircle} alt='avatarcircle' className='avatarcircle-img' 
        />
        <HeroRotate>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>

       
          
        </HeroRotate>
      </HeroCircle>
    </Containere>
          </Grid>

        </Grid>

      </div>
     
    </Container>
    </Box>
  )
}

export default Home