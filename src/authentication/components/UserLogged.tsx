import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/system"
import { useDispatch } from "react-redux";
import authActions from "../../authentication/redux/authActions";
import { Users } from '../../Blogeek-library/models/Users';
import { useHistory } from "react-router";
import { formatDate } from "../../common/services/formatDate";



interface UserLoggedProps {
  user?: Users;
}
const UserLogged: React.FC<UserLoggedProps> = (props) => {

  const { user } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOff = () => {
    dispatch(authActions.setNoAuth());
  }

  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" justifyItems="center">
      {user && (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box style={{ margin: theme.spacing(3) }} display='flex' flexDirection='row' justifyContent="flex-start" alignItems='center'>
            <Typography >Bienvenue,</Typography><Typography style={{ fontWeight: "bold", textTransform: "uppercase" }}> {user?.nick_name}</Typography>
          </Box>
          <Box style={{ margin: theme.spacing(1) }} display='flex' flexDirection='row' justifyContent="flex-start" alignItems='center'>
            <Box
              borderRadius="50%"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width='150px'
              height='150px'
              border={`1px solid ${theme.palette.secondary.main}`}
              style={{
                background: user.avatar
                  ? `url(${user.avatar})`
                  : `linear-gradient(0.65turn,${theme.palette.secondary.light},${theme.palette.secondary.dark})`
              }}>
              {!user.avatar &&
                <Typography variant="subtitle2">Pas d'image de profile</Typography>
              }
            </Box>
          </Box>

          <Button style={{ margin: theme.spacing(2) }} variant="contained" onClick={() => history.push("/myProfile/")}>Modifier mon Profil</Button>
          <Button style={{ margin: theme.spacing(2) }} variant="contained" onClick={handleLogOff}>LogOff !</Button>
        </Box>
      )}

    </Box>)
}
export default UserLogged