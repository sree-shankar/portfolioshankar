import { Typography, Container, Box, Grid, Stack, useTheme } from '@mui/material'
import React from 'react'
import { pic, usernewimage } from '../images/images'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react'


const About = () => {
  const theme = useTheme()
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (

    <div style={{ backgroundColor: theme?.palette?.mode === "light" ? "#F9FAFB" : "#111827" }} className="">

      <Container maxWidth="lg" >

        <div className='about-div-2' >

          <div className='custom-download-cv-web-2' style={{ backgroundColor: "#3178C6" }}>
            <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>About me</Typography>
          </div>
          <Box mt={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className='userimage-grid' data-aos="flip-down">
                {
                  theme?.palette?.mode === "light" ?
                  <img src={usernewimage} alt='userimage' className='usernewimage-about' />
                  : <img src={pic} alt='userimage' className='usernewimage-about' />
                }  
              </Grid>

              <Grid item xs={12} md={6} data-aos="flip-up">
                <Typography variant='h5' className='h5-variant'>Curious about me? Here you have it:</Typography>
                <Typography variant='body1' className='body1-variant' mt={2}>
                  I specialize in creating user-friendly interfaces and have a strong foundation in JavaScript, HTML,
                  and CSS. Over the past three years,
                  I've worked on various projects ranging from small business websites to large-scale web applications.
                  My focus is on writing clean, efficient code and continuously improving my skills.
                </Typography>

                <Typography variant='body1' className='body1-variant' mt={2}>
                  I began my journey as a web developer in 2021, and since then,
                  I've continued to grow and evolve as a developer,
                  taking on new challenges and learning the latest technologies along the way.
                  After completing my degree, I started my web development journey,
                  building cutting-edge web applications using modern technologies.
                </Typography>

                <Typography variant='body1' className='body1-variant' mt={2}>
                  I am very much a progressive thinker and enjoy working on products end to end,
                  from ideation all the way to development.
                </Typography>

                {/* <Typography variant='body1' className='body1-variant' mt={2}>
                You can find me hovering around Indeed, witnessing the journey of early startups.
                 You can follow me on Indeed, where I share tech-related bites and build in public,
                  or you can follow me on GitHub.
                </Typography> */}
                <Typography variant='body1' className='body1-variant' mt={2}>
                  Finally, some quick bits about me.
                </Typography>
                <Stack direction={"row"} gap={{ xs: 1, sm: 2 }} mb={3} >
                  <ul className='ul-font-about'>
                    <li className='li-font-about'>B.E. in ECE Engineering</li>
                    <li className='li-font-about'>Experience with React.js</li>
                  </ul>
                  <ul className='ul-font-about'>
                    <li className='li-font-about'>Contributor to open-source projects</li>
                    <li className='li-font-about'>Traveling and Watching movies</li>
                  </ul>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </div>

      </Container>
    </div>

  )
}

export default About