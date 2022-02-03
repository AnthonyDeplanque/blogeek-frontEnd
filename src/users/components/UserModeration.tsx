import { Box, Switch, Typography, useTheme } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import { Users } from "../../Blogeek-library/models/Users";
import { useEffect, useState } from "react";
import MainCard from "../../common/components/MainCard";
import { ROLE } from "../../Blogeek-library/models/Role";
import Forbidden from "../../common/components/Forbidden";
import { cardRadius } from "../../common/theme/Theme";
import { useDispatch } from "react-redux";
import usersActions from "../redux/usersActions";
import { formatDate } from "../../common/services/formatDate";



interface UserModerationProps { };

const UserModeration: React.FC<UserModerationProps> = (props) => {
    const param: any = useParams();
    const { id } = param;
    const usersData = useTypedSelector((state: RootState) => state.users.data);
    const [user, setUser] = useState<Users>();
    const authData = useTypedSelector((state: RootState) => state.authentication.data);
    const history = useHistory();
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        if (usersData) {
            setUser(usersData?.filter((user: Users) => user.id === id)[0]);
        }
    }, [id, usersData])

    return (<>

        {authData?.id ?
            user && (<MainCard title={user.nick_name} height="100%" onClose={() => history.push('/users')}>

                <Box style={{ border: `1px solid ${theme.palette.text.primary}`, borderRadius: cardRadius }} display="flex" flexDirection="column" alignItems="flex-start" width="20%" padding={theme.spacing(1)}>
                    <Typography variant="h5">Roles</Typography>
                    {Object.keys(ROLE).map((role: string) => {
                        const idToRole = { id: id as string, role: role as ROLE };
                        return authData?.roles?.includes(ROLE.ROLE_ADMIN) || authData?.roles?.includes(ROLE.ROLE_MODERATOR)
                            ? <Box display="flex" flexDirection="row" alignItems="center">
                                <Switch
                                    checked={user.roles?.includes(role as ROLE)}
                                    disabled={role === ROLE.ROLE_USER}
                                    onChange={() => {
                                        user.roles?.includes(role as ROLE) ? setUser({ ...user, roles: [...user.roles!.filter((roles: string) => roles !== role)] }) : setUser({ ...user, roles: [...user.roles!, role as ROLE] });
                                        user.roles?.includes(role as ROLE) ? dispatch(usersActions.deleteUserRole(idToRole)) : dispatch(usersActions.setUserRole(idToRole));
                                    }} />
                                <Typography>{role.slice(5)}</Typography>
                            </Box>
                            : user?.roles?.includes(role as ROLE) ? <Box display="flex" flexDirection="row" alignItems="center"><Typography>{role.slice(5)}</Typography></Box> : ""


                    }
                    )
                    }
                </Box>
                <Box>
                    {user?.biography && <Typography >{user.biography}</Typography>}
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>email</Typography><Typography>{user.email}</Typography></Box>
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>Date d'inscription</Typography><Typography>{formatDate(user.inscription_time)}</Typography></Box>
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>Nom</Typography><Typography>{user.last_name}</Typography></Box>
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>Prénom</Typography><Typography>{user.first_name}</Typography></Box>
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>Nombre d'articles écrits</Typography><Typography>{user?.articles?.length && user.articles.length > 0 ? user.articles.length : "aucun"}</Typography></Box>
                    <Box display="flex" alignItems='center' flexDirection="row"><Typography style={{ margin: theme.spacing(1) }}>Nombre de commentaires écrits</Typography><Typography>{user?.comments?.length && user.comments.length > 0 ? user.comments.length : "aucun"}</Typography></Box>

                </Box>
            </MainCard>)
            : (
                <Forbidden />
            )}
    </>
    )
}
export default UserModeration