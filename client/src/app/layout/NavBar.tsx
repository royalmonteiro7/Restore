import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export default function NavBar({ darkMode, toggleDarkMode }: Props) {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography>RE-STORE</Typography>
                <IconButton onClick={toggleDarkMode}>
                    {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}