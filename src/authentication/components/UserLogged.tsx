import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/system"
import { useDispatch } from "react-redux";
import authActions from "../../authentication/redux/authActions";
import { Users } from '../../Blogeek-library/models/Users';
import { useHistory } from "react-router";
import AvatarDisplayer from "../../common/components/AvatarDisplayer";



interface UserLoggedProps {
  user?: Users;
}
const UserLogged: React.FC<UserLoggedProps> = (props) => {

  const { user } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOff = () => dispatch(authActions.setNoAuth());

  return (

    <Box height="100%" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" justifyItems="center">
      {user && (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box style={{ margin: theme.spacing(3) }} display='flex' flexDirection='row' justifyContent="flex-start" alignItems='center'>
            <Typography >Bienvenue,</Typography><Typography style={{ fontWeight: "bold", textTransform: "uppercase" }}> {user?.nick_name}</Typography>
          </Box>
          <Box style={{ margin: theme.spacing(1) }} display='flex' flexDirection='column' justifyContent="flex-start" alignItems='center'>
            <AvatarDisplayer avatar={user.avatar ? user.avatar : undefined} />
            {user.biography && <Typography variant="subtitle2" sx={{ fontStyle: "oblique" }}>{`"${user.biography}"`}</Typography>}
          </Box>
          <Button
            style={{ margin: theme.spacing(2) }}
            variant="contained"
            color="secondary"
            onClick={() => history.push("/myProfile/")}>Modifier mon Profil
          </Button>
          <Button
            style={{ margin: theme.spacing(2) }}
            variant="contained"
            color="secondary"
            onClick={handleLogOff}>LogOff !
          </Button>
        </Box>

      )
      }

    </Box>)
}
export default UserLogged