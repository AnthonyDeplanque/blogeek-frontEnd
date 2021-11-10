
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Box, breakpoints } from "@mui/system";

import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import Login from "../components/Login";
import authActions from "../../authentication/redux/authActions";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import '../../common/assets/style.css';
import Navbar from "../components/NavBar";
import TopBar from "../components/TopBar";

interface LayoutProps { };
export const topbarHeight = 90
const Layout: React.FC<LayoutProps> = (props) => {

  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const authentication = useTypedSelector((state: RootState) => state.authentication.data)
  const dispatch = useDispatch();
  const theme = useTheme();

  const mobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (!authentication)
    {
      dispatch(authActions.getAuthByToken())
    }
  }, [])

  const onItemClicked = (path: string) => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <Box display="block" width="100vw">
      <Box width="100%" height="100%" marginTop={topbarHeight} display="flex" flexDirection="column" margin={0} padding={0}>
        <Drawer anchor="left" PaperProps={{
          style: {
            marginTop: `${topbarHeight}px`,
            height: `calc(100vh - ${topbarHeight}px) !important`,
            backgroundColor: 'transparent',
            boxShadow: "none",
            overflowY: "hidden"
          }
        }} open={navBarOpen} onClose={() => setNavBarOpen(false)}>
          <Navbar onItemClicked={onItemClicked} />
        </Drawer>
        <Drawer anchor="right" PaperProps={{
          style: {
            marginTop: `${topbarHeight}px`,
            backgroundColor: 'transparent',
            boxShadow: "none",
            overflowY: "hidden"
          }
        }} open={authOpen} onClose={() => setAuthOpen(false)}>
          <Login />
        </Drawer>
        <Box position="fixed"><TopBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} authOpen={authOpen} setAuthOpen={setAuthOpen} mobile={mobile} /></Box>
        <Box display="flex" flexDirection="row" width="100%" justifyContent="center">
          <Box display="flex" flexDirection="column" width="80%" alignItems="center" alignSelf="center" justifyItems="center" >
            {props.children}
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Layout;