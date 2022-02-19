
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import Login from "../components/Login";
import authActions from "../../authentication/redux/authActions";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import '../../common/assets/style.css';
import Navbar from "../components/NavBar";
import TopBar from "../components/TopBar";
import LoadingComponent from "../../loading/components/LoadingComponent";

interface LayoutProps { };
export const topbarHeight = 90
const Layout: React.FC<LayoutProps> = (props) => {

  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const authentication = useTypedSelector((state: RootState) => state.authentication.data)
  const loading = useTypedSelector((state: RootState) => state.loading.data)
  const dispatch = useDispatch();
  const theme = useTheme();

  const mobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (!authentication) {
      dispatch(authActions.getAuthByToken())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onItemClicked = (path: string) => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <Box display="block" width="100vw" height='100vh' overflow="hidden">
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
        <Box position="fixed" zIndex={500} boxShadow={"0px 3px 3px rgba(0,0,0,0.4)"}><TopBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} authOpen={authOpen} setAuthOpen={setAuthOpen} mobile={mobile} /></Box>
        {loading && <LoadingComponent />}
        <Box display="flex" marginTop={`${topbarHeight}px`} flexDirection="column" width="100%" alignItems="center" overflow="auto" alignSelf="center" justifyItems="center" >
          {props.children}
        </Box>


      </Box>
    </Box>
  )
}

export default Layout;