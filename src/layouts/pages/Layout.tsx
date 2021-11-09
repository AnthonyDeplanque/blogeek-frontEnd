
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import Login from "../../authentication/components/Login";
import authActions from "../../authentication/redux/authActions";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";

import Navbar from "../components/NavBar";
import TopBar from "../components/TopBar";

interface LayoutProps { };
export const topbarHeight = 90
const Layout: React.FC<LayoutProps> = (props) => {

  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const authentication = useTypedSelector((state: RootState) => state.authentication.data)
  const dispatch = useDispatch();

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
    <Box display="block">
      <Box width="100%" height="100%" display="flex" flexDirection="column" margin={0} padding={0}>
        <TopBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} authOpen={authOpen} setAuthOpen={setAuthOpen} />
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