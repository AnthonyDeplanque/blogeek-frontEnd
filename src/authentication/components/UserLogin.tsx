import { useTheme } from "@mui/system"
import { useState } from 'react';
import { useDispatch } from "react-redux";
import authActions from "../../authentication/redux/authActions";
import { TextField, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface UserLoginProps {

}
const UserLogin: React.FC<UserLoginProps> = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [nick_name, setNick_name] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleSubmit = () => {
    dispatch(authActions.getAuth({ nick_name, password }));
  }

  return (
    <Box height="100%" width="100%" display='flex' flexDirection="column" justifyContent='space-between' alignItems="stretch">
      <Box display='flex' flexDirection="column" justifyContent='center' alignItems="center">
        <TextField onChange={(e) => setNick_name(e.target.value)} variant="outlined" type="text" name="nick_name" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="UserName"></TextField>
        <TextField onChange={(e) => setPassword(e.target.value)} type="password" name="password" style={{ padding: theme.spacing(1), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} label="PassWord"></TextField>
      </Box>
      <Box padding={theme.spacing(2)} width="100%" display="flex" flexDirection="row" justifyContent="center">
        <Button variant="contained" onClick={handleSubmit}>LogIn !</Button></Box>
      <Box display='flex' flexDirection="column" justifyContent='center' alignItems="center">
        <Link style={{ color: theme.palette.primary.light, textDecoration: "none" }} to="/inscription"><Typography variant="caption">Pas encore de compte ? s'inscrire</Typography></Link>
      </Box>
    </Box>)

}
export default UserLogin