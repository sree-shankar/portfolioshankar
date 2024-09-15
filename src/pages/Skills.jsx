import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { bootstrap, css, github, githublogo, html, js, mantine, mui, nextjs, react, reactquery, reduxtoolkit } from '../images/images'

const Skills = () => {
  const theme = useTheme()
  return (
    <div style={{ marginTop: "30px", marginBottom: "15px" }}>
      <Container maxWidth="lg" >
        <div className='about-div-2'>
          <div className='custom-download-cv-web-3' style={{ backgroundColor: "#3178C6" }}>
            <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Skills</Typography>
          </div>

          <Box mt={3} >
            <Typography variant='body2' className="body2-variant" textAlign={"center"}>
              The skills, tools and technologies I am really good at:
            </Typography>
          </Box>

          <Box mt={5} className="marquee">
            <Stack direction={"row"} gap={{ xs: 4, sm: 8 }} useFlexGap sx={{ flexWrap: 'wrap' }} justifyContent={"center"}>
              <Box className="marquee-content">
              <Box textAlign={"center"} className="marquee-item">
                <img src={html} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  HTML
                </Typography>
              </Box>
              <Box textAlign={"center"} className="marquee-item">
                <img src={css} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  CSS
                </Typography>
              </Box>
              <Box textAlign={"center"} className="marquee-item">
                <img src={mui} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  MUI
                </Typography>
              </Box>
              <Box textAlign={"center"} className="marquee-item">
                <img src={bootstrap} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  Bootstarp
                </Typography>
              </Box>
              {/* <Box textAlign={"center"} className="marquee-item">
                <img src={mantine} alt='react' className='skill-icon-two' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  Mantine
                </Typography>
              </Box> */}
              <Box textAlign={"center"} className="marquee-item">
                <img src={js} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  JS
                </Typography>
              </Box>
              <Box textAlign={"center"} className="marquee-item">
                <img src={react} alt='react' className='skill-icon-two' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  React
                </Typography>
              </Box>
              {/* <Box textAlign={"center"} className="marquee-item">
                <img src={nextjs} alt='react' className='skill-icon-two' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  Next Js
                </Typography>
              </Box> */}
            
              <Box textAlign={"center"} className="marquee-item">
                <img src={reduxtoolkit} alt='react' className='skill-icon-two' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  Toolkit
                </Typography>
              </Box>
              
              <Box textAlign={"center"} className="marquee-item">
                <img src={reactquery} alt='react' className='skill-icon' />
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  React Query
                </Typography>
              </Box>
                 <Box textAlign={"center"} className="marquee-item">
                  {theme?.palette?.mode === "light" ? 
                   <img src={githublogo} alt='react' className='skill-icon' /> :
                   <img src={github} alt='react' className='skill-icon' />
                }
                <Typography variant='body2' className="body2-variant" textAlign={"center"}>
                  GitHub
                </Typography>
              </Box>
              </Box>
            </Stack>
          </Box>
        </div>
      </Container>
    </div>
  )
}

export default Skills