
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@mui/material";

import { BULLET } from "../../common/theme/Theme";
import { Users } from '../../Blogeek-library/models/Users';
import { ROLE, Roles } from "../../Blogeek-library/models/Role";
interface UserLineProps {
  user: Users;
}

const UserLine: React.FC<UserLineProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  return (
    <Box padding={theme.spacing(1)} width="100%" display="grid" style={{ gridTemplateColumns: "1fr .3fr 1fr .3fr 1fr .3fr 1fr" }}>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start"><Typography>{user.nick_name}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{user.email}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{user.inscription_time}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center"><Typography>{BULLET}</Typography></Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end"><Box display="flex" flexDirection="column">{user?.roles?.map((role) => {
        return (<Box display="flex" justifyContent="flex-end"><Typography>{role}</Typography></Box>)
      })}</Box></Box>
    </Box>
  )
}
export default UserLine;