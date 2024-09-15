import { Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { Appbarstyle, MaterialUISwitch, Toolbarstyle } from '../theme/helpertheme'
import MenuIcon from '@mui/icons-material/Menu';
import {CloseOutlined , WbIncandescentOutlined, ListAltOutlined, CallOutlined, AccountCircleOutlined, PsychologyAltOutlined} from '@mui/icons-material';
import { ThemeContext } from '../theme/theme';
import { Link as ScrollLink } from 'react-scroll';


export const Header = () => {
    const theme = useTheme()
    const [state, setState] = React.useState({
        right: false,
    });
    const { toggleTheme } = useContext(ThemeContext)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ListSubheader  sx={{background: theme?.palette?.mode === "dark" && "#000000" }}>
                <Stack direction={"row"} justifyContent={"space-between"} mt={2} mb={2}>
                    <Box sx={{ display: "flex" }} >

                        <Box  mt={1.3} className="Box-head-menu-1" sx={{ backgroundColor: theme?.palette?.mode === "light" ? "#3178c6" : "#FFFFFF" }}>
                            <Typography variant='h4' className='h4-menuvariant' component={"h1"} mt={0.2}> S</Typography>
                        </Box>
                        <Typography variant='h3' className='h3-menuvariant' mt={1.6} ml={0.4}>
                           ree Shankar
                        </Typography>

                    </Box>
                    <Box>
                        <CloseOutlined color='grey' fontSize='small' onClick={toggleDrawer(anchor, false)} />
                    </Box>
                </Stack>
            </ListSubheader>
            <Divider sx={{background: theme?.palette?.mode === "dark" && "#FFF"}} variant="middle" />
            <List>
                {['About', 'Skills', 'Experience', 'Projects', "Contact"].map((text, index) => (

                    <ListItem key={text} disablePadding>
                        <ScrollLink to={text} smooth={true} duration={500} className='style-pointer'>
                            <ListItemButton onClick={toggleDrawer(anchor, false)}>
                                <ListItemIcon sx={{minWidth: "35px"}}>
                                    {index === 0 ? (
                                        <AccountCircleOutlined />
                                    ) : index === 1 ? (
                                        <PsychologyAltOutlined />
                                    ) :  index === 2 ? (
                                        <WbIncandescentOutlined />
                                    ) : index === 3 ? (
                                        <ListAltOutlined />
                                    ) : (
                                        <CallOutlined />
                                    )}
                                </ListItemIcon>

                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ScrollLink>
                    </ListItem>

                ))}
            </List>
            <Divider sx={{background: theme?.palette?.mode === "dark" && "#FFF" }} variant="middle" />

            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} mt={1} pr={2} pl={2}>
                <Box>
                    <Typography variant="h6">Switch Theme</Typography>
                </Box>
                <MaterialUISwitch onClick={toggleTheme} />
            </Stack>

            <div className='custom-download-cv'>
              <a href="/SreeShankarResume3years.pdf" download className='atagfooter'>
                <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Download CV</Typography>
                </a>
            </div>


        </Box>
    );

    return (
        <>
            <Appbarstyle sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : "#000000" }} component="nav">
                <Container maxWidth="lg" sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : "#000000" }}>
                    <Toolbarstyle sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : "#000000" }} >
                        <Box sx={{ display: "flex" }}>
                            <Box mt={0.7} className="Box-head-1" sx={{ backgroundColor: theme?.palette?.mode === "light" ? "#3178c6" : "#FFFFFF" }}>
                                <Typography variant='h4' component={"h1"} mt={0.2}> S</Typography>
                            </Box>
                            <Typography variant='h3' mt={1.2} ml={0.4}>
                                ree Shankar
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex", lg: "flex" }, }} >
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems={"center"}
                                width="20%"
                                gap={5}
                            >
                                <ScrollLink to="About" smooth={true} duration={500} className='style-pointer'>
                                    <Typography variant='h6'>About</Typography>
                                </ScrollLink>
                                <ScrollLink to="Skills" smooth={true} duration={500} className='style-pointer'>
                                    <Typography variant='h6'>Skills</Typography>
                                </ScrollLink>

                                <ScrollLink to="Experience" smooth={true} duration={500} className='style-pointer'>
                                    <Typography variant='h6'>Experience</Typography>
                                </ScrollLink>
                                <ScrollLink to="Projects" smooth={true} duration={500} className='style-pointer'>
                                    <Typography variant='h6'>Projects</Typography>
                                </ScrollLink>

                                <ScrollLink to="Contact" smooth={true} duration={500} className='style-pointer'>
                                    <Typography variant='h6'>Contact</Typography>
                                </ScrollLink>
                                <Stack direction="row" alignItems={"center"} gap={3}>
                                    
                                    <MaterialUISwitch onClick={toggleTheme}/>
                                    <div className='custom-download-cv-web' style={{ backgroundColor: theme?.palette?.mode === "light" ? "#3178C6" : "#FFFFFF" }}>
                                    <a href="/SreeShankarResume3years.pdf" download className='atagfooter'>
                                        <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={theme?.palette?.mode === "light" ? "#FFFFFF" : "#000000"}>DownloadCV</Typography>
                                        </a>
                                    </div>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: "none", lg: "none" }, }}>

                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <MenuIcon color='primary' fontSize='medium' onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Toolbarstyle>
                </Container>
            </Appbarstyle>

        </>

    )

}

