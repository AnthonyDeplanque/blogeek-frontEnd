import { Create } from "@material-ui/icons";
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Users } from "../../Blogeek-library/models/Users";
import AvatarDisplayer from "../../common/components/AvatarDisplayer";
import Forbidden from "../../common/components/Forbidden";
import Loading from "../../common/components/Loading";
import MainCard from "../../common/components/MainCard";
import MainDialog from "../../common/components/MainDialog";
import { formatDate } from "../../common/services/formatDate";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import authActions from "../redux/authActions";

interface MyProfileProps { }
const MyProfile: React.FC<MyProfileProps> = (props) => {

    let auth = useTypedSelector((state: RootState) => state.authentication.data);
    const [user, setUser] = useState<Users>();
    const [modalAvatar, setModalAvatar] = useState<boolean>(false);

    const theme = useTheme();
    const dispatch = useDispatch();

    const mobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
        if (auth) {
            setUser(auth);
        }
    }, [auth])


    const handleChangeProfile = () => {
        dispatch(authActions.updateProfile(user!));

    }

    return auth ? (
        user ? (
            <MainCard title={user.nick_name}>
                <Box display="flex" flexDirection="column">
                    {/* Email et Inscription */}
                    <Box display="flex" flexDirection={mobile ? 'column' : "row"} alignItems="center" justifyContent="space-between" margin={theme.spacing(1, 0, 3, 0)}>
                        <Box display='flex' flexDirection="row" alignItems="center">
                            <Typography variant="h5">{user.email}</Typography>
                        </Box>
                        <Box display='flex' flexDirection="row" alignItems="center">
                            <Typography style={{ margin: theme.spacing(0, 1, 0, 1) }}>Date d'inscription : </Typography>
                            <Typography style={{ margin: theme.spacing(0, 1, 0, 1) }}>{formatDate(user.inscription_time)}</Typography>
                        </Box>
                    </Box>


                    <Box display="flex" flexDirection={mobile ? 'column' : 'row'} alignItems='center' justifyContent="space-evenly">
                        <Box>
                            <AvatarDisplayer avatar={user.avatar ? user.avatar : undefined} />

                            {modalAvatar && <MainDialog open={modalAvatar} onClose={() => setModalAvatar(false)}>
                                <Box>
                                    <TextField fullWidth label="Avatar" name='avatar' value={user.avatar ? user.avatar : null} onChange={(e) => setUser({ ...user, avatar: e.target.value })} />
                                </Box>
                            </MainDialog>
                            }
                            <Box position="relative" bottom="25px" left="125px"><Create fontSize="large" onClick={() => setModalAvatar(true)} /></Box>
                        </Box>

                        <TextField label="Nom" name="last_name" value={user.last_name ? user.last_name : null} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                        <TextField label="Prénom" name="first_name" value={user.first_name ? user.first_name : null} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                        <Box>
                            <TextField fullWidth label="Biographie" name='biography' value={user.biography ? user.biography : null} onChange={(e) => setUser({ ...user, biography: e.target.value })} />
                        </Box>

                    </Box>

                    {/* Bouton valider */}
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <Button variant="contained" onClick={handleChangeProfile}>Valider les changements</Button></Box>
                </Box>
            </MainCard >) : <Loading />
    )
        : (<Forbidden />)

}
export default MyProfile;