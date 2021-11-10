
import { Box, Typography } from "@material-ui/core";
import { useMediaQuery, useTheme } from "@mui/material";

import { BULLET } from "../../common/theme/Theme";
import { Users } from '../../Blogeek-library/models/Users';
import { ROLE, Roles } from "../../Blogeek-library/models/Role";
import { formatDate } from "../../common/services/formatDate";
interface UserLineProps {
  user: Users;
}

const UserLine: React.FC<UserLineProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  const roleDisplayer = (role: ROLE[]) => {

    if (role.includes(ROLE.ROLE_ADMIN))
    {
      return 'Administrateur';
    } else if (role.includes(ROLE.ROLE_MUTED))
    {
      return 'Modéré';
    } else
    {
      let roles = [''];
      if (role.includes(ROLE.ROLE_CREATOR))
      {
        roles.push("Créateur");
      }
      if (role.includes(ROLE.ROLE_MODERATOR))
      {
        roles.push("Modérateur");
      }
      if (role.includes(ROLE.ROLE_USER))
      {
        roles.push('Utilisateur')
      }

      return roles.join(' ');
    }
  };

  return (
    <Box padding={theme.spacing(1)} width="100%" display="grid" style={{ gridTemplateColumns: mobile ? "1fr" : ".5fr .1fr 1fr .1fr 1fr .1fr .5fr" }}>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start"><Typography>{user.nick_name}</Typography></Box>
      {!mobile && <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>}
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{user.email}</Typography></Box>
      {!mobile && <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>}
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{formatDate(user.inscription_time)}</Typography></Box>
      {!mobile && <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>}
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end"><Box display="flex" flexDirection="row">{user.roles && <Typography>{roleDisplayer(user.roles as ROLE[])}</Typography>}</Box></Box>
    </Box>
  )
}
export default UserLine;