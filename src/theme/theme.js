import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const [mode, setMode] = useState("dark")
    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
        },
        typography: {
            h1: {
                color: 'rgb(236,82,55)',
                background: 'radial-gradient(circle, rgba(236,82,55,1) 0%, rgba(172,89,229,1) 100%)',
                fontFamily: "Poppins",
                WebkitBackgroundClip: 'text',
                fontSize: "3.625rem",
                WebkitTextFillColor: 'transparent',
                fontWeight: 600
            },
            h2: {
                color: mode === "light" ? "#111827" : "#FFFFFF",
                // backgroundColor: "#3178c6",
                fontFamily: "Poppins",
                fontSize: "1.125rem",
                fontWeight: 600

            },
            h3: {
                color: mode === "light" ? "#000000" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "29px",
                fontWeight: 700
            },
            h4: {
                color: mode === "light" ? "#FFFFFF" : "#000000",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: 700
            },
            h5: {
                color: mode === "light" ? "#111227" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "1.60rem",
                fontWeight: 600
            },
            h6: {
                color: mode === "light" ? "#4B5563" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 400
            },
            subtitle1: {
                color: "#4B5563",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500
            },
            subtitle2: {
                color: mode === "light" ? "#4B5563" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "0.898rem",
                fontWeight: 400,
                textAlign: "center"
            },
            body1: {
                color: mode === "light" ? "#4B5563" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "0.898rem",
                fontWeight: 400,
            },
            body2: {
                color: mode === "light" ? "#4B5563" : "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: 400,
            },
            button: {
                color: "#FFFFFF",
                fontSize: "0.870rem",
                lineHeight: 1.75,
                fontWeight: 500,
                fontFamily: "Poppins",
                textTransform: "unset"
            }

        },
    components: {
        MuiDrawer:{
        styleOverrides: {
            paper: {
                background: mode === "dark" && "#000000",
                
            }
        }
        }
    }

    }), [mode])

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

