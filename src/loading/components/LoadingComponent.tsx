import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import MainDialog from "../../common/components/MainDialog";
import Gear from "../assets/Gear";
interface LoadingComponentProps { };

const LoadingComponent: React.FC<LoadingComponentProps> = (props) => {
    const theme = useTheme();
    return (
        <MainDialog open={true} >
            <Box padding={theme.spacing(3, 0)} display='flex' flexDirection="row" justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center">

                    <Gear />
                    <Box width="100%" display="flex" flexDirection="row" justifyContent="center"></Box>
                    <Typography variant="h3" color="secondary.light" style={{ fontWeight: "bold" }}>Chargement</Typography>
                </Box>
            </Box>
        </MainDialog >
    );

}

export default LoadingComponent;