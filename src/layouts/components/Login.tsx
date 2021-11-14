import { FormControl, Box, } from "@mui/material";
import { useTheme } from "@mui/system"
import { useState } from 'react';
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import { useEffect } from "react";
import { Users } from '../../Blogeek-library/models/Users';
import { darkBackgroundColor, lightDarkBackgroundColor, navBarBackgroundRadius } from "../../common/theme/Theme";
import UserLogin from "../../authentication/components/UserLogin";
import UserLogged from "../../authentication/components/UserLogged";


interface LoginProps { }
const Login: React.FC<LoginProps> = (props) => {
  const theme = useTheme();
  const [user, setUser] = useState<Users | null>();
  let auth = useTypedSelector((state: RootState) => state.authentication.data);

  useEffect(() => {
    setUser(auth);
  }, [auth])


  const borderRadius = `${navBarBackgroundRadius} 0 0 0`;
  return (

    <Box
      style={{
        height: `100%`,
        width: "250px",
        background: `linear-gradient(0.65turn,${lightDarkBackgroundColor}77,${darkBackgroundColor}77)`,
        boxShadow: '0 8px 32px 0 rgba( 31,  135, 38, 0.37 )',
        backdropFilter: 'blur( 9px )',
        borderRadius: borderRadius,
        paddingBottom: "100px",
        overflowY: "auto",
        borderTop: `3px solid ${theme.palette.secondary.dark}`,
        borderLeft: `3px solid ${theme.palette.secondary.dark}`,
      }}>
      <FormControl style={{
        paddingTop: theme.spacing(3),
        display: "flex",
        flexDirection: 'column',
        alignContent: "space-around",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {user === null || user === undefined
          ? <UserLogin />
          : <UserLogged user={user} />
        }
      </FormControl >
    </Box >
  )

}

export default Login;