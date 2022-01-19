import React, { FC } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

export const themeObject: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: '#171717',
        },
        secondary: {
            main: '#757575',
        },
    },
});

export const Theme: FC = ({ children }) => (
    <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
);
