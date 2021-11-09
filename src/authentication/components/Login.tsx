import { FormControl, TextField, Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/system"
import MainCard from "../../common/components/MainCard";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import authActions from "../redux/authActions";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import { useEffect } from "react";
import { Users } from '../../Blogeek-library/models/Users';
import { useHistory } from "react-router";

interface LoginProps { }
const Login: React.FC<LoginProps> = (props) => {
  const [nick_name, setNick_name] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [user, setUser] = useState<Users | null>();
  const theme = useTheme();
  const dispatch = useDispatch();
  let auth = useTypedSelector((state: RootState) => state.authentication.data);
  const history = useHistory();

  const handleSubMit = () => {
    dispatch(authActions.getAuth({ nick_name, password }));
  }
  const handleLogOff = () => {
    dispatch(authActions.setNoAuth());
  }

  useEffect(() => {
    setUser(auth);
  }, [auth])

  return (

    <MainCard>
      <FormControl>
        {
          user === null
            ?
            (
              <Box >

                <TextField onChange={(e) => setNick_name(e.target.value)} variant="outlined" type="text" name="nick_name" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="UserName"></TextField>
                <TextField onChange={(e) => setPassword(e.target.value)} type="password" name="password" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="PassWord"></TextField>

                <Box padding={theme.spacing(1)} width="100%" display="flex" flexDirection="row" justifyContent="center">
                  <Button variant="contained" onClick={handleSubMit}>LogIn !</Button></Box>
              </Box>
            )
            : (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around"><Typography style={{ margin: theme.spacing(1) }}>Bienvenue, {user?.nick_name}</Typography><Button style={{ margin: theme.spacing(1) }} variant="contained" onClick={() => history.push("/myProfile/")}>Mon Profil</Button><Button style={{ margin: theme.spacing(1) }} variant="contained" onClick={handleLogOff}>LogOff !</Button></Box>)
        }
      </FormControl >
    </MainCard >
  )

}

export default Login;