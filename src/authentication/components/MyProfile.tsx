import { Create } from "@material-ui/icons";
import { Box, Typography, useTheme, TextField } from "@mui/material"
import React, { useState, useEffect } from "react";
import { Users } from "../../Blogeek-library/models/Users";
import MainCard from "../../common/components/MainCard";
import { formatDate } from "../../common/services/formatDate";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";

interface MyProfileProps { }
const MyProfile: React.FC<MyProfileProps> = (props) => {

  let auth = useTypedSelector((state: RootState) => state.authentication.data);
  const [user, setUser] = useState<Users | null>();

  const theme = useTheme();

  useEffect(() => {
    setUser(auth);
  }, [auth])

  return user ? (
    <MainCard title={user.nick_name}>
      <Box display="flex" flexDirection="column">
        <Box display='flex' flexDirection="row">
          <Typography style={{ margin: theme.spacing(1) }}>Date d'inscription : </Typography><Typography style={{ margin: theme.spacing(1) }}>{formatDate(user.inscription_time)}</Typography>
        </Box>
        <Box>
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
          <Box position="relative" bottom="25px" left="125px"><Create fontSize="large" onClick={() => alert('not yet implemented')} /></Box>
          <Typography>{user.email}</Typography>
          <TextField label="Nom" name="last_name" value={user.last_name ? user.last_name : null} />
          <TextField label="Prénom" name="first_name" value={user.first_name ? user.first_name : null} />
          <Box>
            <TextField fullWidth label="Biographie" name='biography' value={user.biography ? user.biography : null} />
          </Box>
        </Box>
      </Box>
    </MainCard >
  )
    : (<Typography>Une erreur est survenue</Typography>)

}
export default MyProfile;