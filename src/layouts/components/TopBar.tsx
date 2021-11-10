import { AccountCircleRounded, Menu } from "@material-ui/icons";
import Logo from "../../common/theme/Logo";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { topbarHeight } from "../pages/Layout";


interface TopBarProps {
  mobile: boolean;
  navBarOpen: boolean;
  authOpen: boolean;
  setNavBarOpen(arg: boolean): void;
  setAuthOpen(arg: boolean): void;
};

const TopBar: React.FC<TopBarProps> = (props) => {
  const theme = useTheme();
  const { navBarOpen, setNavBarOpen, authOpen, setAuthOpen, mobile } = props;

  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" minHeight={`${topbarHeight}px`} height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" minHeight={`${topbarHeight}px`} height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
        <Box padding={theme.spacing(0, 2, 0, 4)}><Menu fontSize="large" onClick={() => setNavBarOpen(!navBarOpen)} /> </Box>
        <Box padding={theme.spacing(0, 2, 0, 2)}><Logo mobile={mobile} /> </Box>
      </Box>
      <Box padding={theme.spacing(0, 4, 0, 2)}><AccountCircleRounded fontSize="large" onClick={() => setAuthOpen(!authOpen)} /></Box>
    </Box>
  )
}

export default TopBar;