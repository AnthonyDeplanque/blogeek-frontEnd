import { AccountCircleRounded, Menu } from "@material-ui/icons";
import Logo from "../../common/theme/Logo";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { topbarHeight } from "../pages/Layout";


interface TopBarProps {
  navBarOpen: boolean;
  authOpen: boolean;
  setNavBarOpen(arg: boolean): void;
  setAuthOpen(arg: boolean): void;
};

const TopBar: React.FC<TopBarProps> = (props) => {
  const theme = useTheme();
  const { navBarOpen, setNavBarOpen, authOpen, setAuthOpen } = props;

  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100vw" minHeight={`${topbarHeight}px`} height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" width="100vw" minHeight={`${topbarHeight}px`} height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
        <Box padding={theme.spacing(0, 2, 0, 2)}><Menu fontSize="large" onClick={() => setNavBarOpen(!navBarOpen)} /> </Box>
        <Box padding={theme.spacing(0, 2, 0, 2)}><Logo /> </Box>
      </Box>
      <Box padding={theme.spacing(0, 2, 0, 2)}><AccountCircleRounded onClick={() => setAuthOpen(!authOpen)} /></Box>
    </Box>
  )
}

export default TopBar;