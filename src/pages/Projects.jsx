import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Chip,
    useTheme,
} from "@mui/material";
import React from "react";
import { gown, hub, school } from "../images/images";
import { LaunchOutlined } from "@mui/icons-material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react'

const Projects = () => {
    const theme = useTheme();
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
    return (
        <Container maxWidth="lg" className="">
            <div className="projects-div-2">
                <div
                    className="custom-download-cv-web-5"
                    style={{ backgroundColor: "#3178C6" }}
                >
                    <Typography
                        variant="body1"
                        className="body1-menu-variant"
                        textAlign={"center"}
                        color={"#FFFFFF"}
                    >
                        Work
                    </Typography>
                </div>
                <Box mt={5}>
                    <Typography
                        variant="body2"
                        className="body2-variant"
                        textAlign={"center"}
                    >
                        Some of the net ,worthy projects I have built:
                    </Typography>
                </Box>

                <Box mt={4} display={"flex"} justifyContent={"center"} data-aos="flip-right">
                    <div
                        className="card-custom"
                        style={{
                            backgroundColor:
                                theme?.palette?.mode === "dark" && "#111827",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    className="project-box-card"
                                    style={{
                                        backgroundColor:
                                            theme?.palette?.mode === "dark" &&
                                            "#374151",
                                    }}
                                >
                                    <img
                                        src={gown}
                                        alt="skillimage"
                                        className="skillimage-proj"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box className="project-box-card-2" >
                                    <Typography
                                        variant="h2"
                                        className="h2-variant"
                                    >
                                        {" "}
                                        New Client Portal
                                    </Typography>
                                    <Box mt={2}>
                                        <Typography
                                            variant="h6"
                                            className="h6-variant"
                                        >
                                            The Events handling system is
                                            designed with multiple filtering
                                            options and the ability to select
                                            multiple events, ensuring a tailored
                                            experience for users. The primary
                                            goal of this project is to enhance
                                            customer usability by providing
                                            intuitive and flexible event
                                            management features. To further
                                            improve the user experience, the
                                            system leverages IndexedDB, allowing
                                            for efficient data storage and
                                            retrieval directly in the browser,
                                            leading to faster load times and
                                            smoother interactions.
                                        </Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <Stack
                                            direction={"row"}
                                            mt={1}
                                            gap={2}
                                            flexWrap="wrap"
                                        >
                                            <Chip
                                                label="React js"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="React Bootstrap"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Redux Toolkit"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Java"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="GitHub"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                        </Stack>
                                    </Box>

                                    {/* <Box mt={2}>
                                        <a
                                            href="https://weddinggown.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LaunchOutlined
                                                sx={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                }}
                                            />
                                        </a>
                                    </Box> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box mt={3} display={"flex"} justifyContent={"center"} data-aos="flip-left">
                    <div
                        className="card-custom"
                        style={{
                            backgroundColor:
                                theme?.palette?.mode === "dark" && "#111827",
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                flexDirection: {
                                    xs: "column-reverse",
                                    md: "row",
                                },
                            }}
                        >
                            <Grid item xs={12} md={6}>
                                <Box className="project-box-card-2">
                                    <Typography
                                        variant="h2"
                                        className="h2-variant"
                                    >
                                        CompuSystems LeadRetrieval System
                                    </Typography>
                                    <Box mt={2}>
                                        <Typography
                                            variant="h6"
                                            className="h6-variant"
                                        >
                                            {" "}
                                            The CompuSystemsLeadRetrieval
                                            Systemis webbased StickerManagement
                                            application, The web app helps to
                                            create Sticker sets
                                            ,Stickers,Products sets and Products
                                            This will help the users to reach
                                            the Product information to the right
                                            people(Attendees) at the right
                                            time,through Exhibitions and
                                            Exhibitor Booths.The appending
                                            details of the product includes,
                                            attachments, links,literatures,
                                            brochures,hosted videos,Images,HTML
                                            and texts etc
                                        </Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <Stack
                                            direction={"row"}
                                            mt={1}
                                            gap={2}
                                            flexWrap="wrap"
                                        >
                                            <Chip
                                                label="React js"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Redux Toolkit"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            {/* <Chip label="Mantine" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      /> */}
                                            <Chip
                                                label="Java"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Github"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                        </Stack>
                                    </Box>

                                    {/* <Box mt={2}>
                                        <a
                                            href="https://tevola.ctsbuildingsupplies.com/login?path=/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LaunchOutlined
                                                sx={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                }}
                                            />
                                        </a>
                                    </Box> */}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    className="project-box-card"
                                    style={{
                                        backgroundColor:
                                            theme?.palette?.mode === "dark" &&
                                            "#374151",
                                    }}
                                >
                                    <img
                                        src={hub}
                                        alt="skillimage"
                                        className="skillimage-proj"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box mt={3} display={"flex"} justifyContent={"center"} data-aos="flip-right">
                    <div
                        className="card-custom"
                        style={{
                            backgroundColor:
                                theme?.palette?.mode === "dark" && "#111827",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    className="project-box-card"
                                    style={{
                                        backgroundColor:
                                            theme?.palette?.mode === "dark" &&
                                            "#374151",
                                    }}
                                >
                                    <img
                                        src={school}
                                        alt="skillimage"
                                        className="skillimage-proj"
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box className="project-box-card-2">
                                    <Typography
                                        variant="h2"
                                        className="h2-variant"
                                    >
                                        Tutors Valley
                                    </Typography>
                                    <Box mt={2}>
                                        <Typography
                                            variant="h6"
                                            className="h6-variant"
                                        >
                                            Tutors Valley is made up of
                                            highly-experienced professionals who
                                            have been working in the education
                                            industry for the past 3 decades. Our
                                            team includes PHD doctors and
                                            subject specialists who together
                                            form an important part of the Tutors
                                            Valley advisory board. Between them,
                                            they have amassed 20 years' teaching
                                            experience in UK, in subjects such
                                            as English, mathematics, biology,
                                            and chemistry, among others. We also
                                            provide dedicated course
                                            administrative support, which
                                            parents can reach out to at any
                                            time.
                                        </Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <Stack
                                            direction={"row"}
                                            mt={1}
                                            gap={2}
                                            flexWrap="wrap"
                                        >
                                            <Chip
                                                label="HTML"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="CSS"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Bootstrap"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Laravel"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                            <Chip
                                                label="Reactjs"
                                                color={"primary"}
                                                size={"small"}
                                                className="chip-header-4"
                                                style={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                    backgroundColor:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#3178C6",
                                                }}
                                            />
                                        </Stack>
                                    </Box>

                                    {/* <Box mt={2}>
                                        <a
                                            href="https://stagingurl.tk/sm_school/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LaunchOutlined
                                                sx={{
                                                    color:
                                                        theme?.palette?.mode ===
                                                            "dark" && "#FFFFFF",
                                                }}
                                            />
                                        </a>
                                    </Box> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div>
        </Container>
    );
};

export default Projects;
