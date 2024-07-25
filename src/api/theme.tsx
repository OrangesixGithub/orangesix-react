import React from "react";
import { createStitches } from "@stitches/react";

export const ThemeDefault = {
    prefix: "os",
    theme: {
        colors: {
            primary: "#0D6EFD",
            secondary: "#6C757D",
            success: "#198754",
            danger: "#DC3545",
            warning: "#FFC107",
            info: "#0DCAF0",
            light: "#F8F9FA",
            dark: "#212529",

            blue100: "#CFE2FF",
            blue200: "#9EC5FE",
            blue300: "#6EA8FE",
            blue400: "#3D8BFD",
            blue500: "#0D6EFD",
            blue600: "#0A58CA",
            blue700: "#084298",
            blue800: "#052C65",
            blue900: "#031633",
        },
        space: {
            "0": "0px",
            "px": "1px",
            "1": ".25rem",
            "2": ".5rem",
            "3": ".75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "7": "1.75rem",
            "8": "2rem",
        },
        sizes: {
            "5": "5%",
            "10": "10%",
            "12-5": "12.5%",
            "15": "15%",
            "17-5": "17.5%",
            "20": "20%",
            "22-5": "22.5%",
            "25": "25%",
            "30": "30%",
            "33": "33%",
            "35": "35%",
            "40": "40%",
            "50": "50%",
            "55": "55%",
            "60": "60%",
            "65": "65%",
            "75": "75%",
            "85": "85%",
            "100": "100%"
        }
    },
    media: {
        sm: "(max-width: 576px)",
        md: "(min-width: 576px) and (max-width: 768px)",
        lg: "(min-width: 768px) and (max-width: 992px)",
        xl: "(min-width: 992px) and (max-width: 1200px)"
    }
};

export type ThemeProps = typeof ThemeDefault;

const ThemeStitches = createStitches(ThemeDefault);

export const ThemeProvider: any = React.createContext({ ...ThemeStitches });

ThemeProvider.displayName = "OrangeSixTheme";