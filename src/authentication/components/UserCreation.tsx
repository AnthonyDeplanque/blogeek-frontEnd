
import { Box, Button, TextField, useTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MainCard from "../../common/components/MainCard";
import authActions from "../redux/authActions";
interface UserCreationProps {

}

const UserCreation: React.FC<UserCreationProps> = (props) => {
    const theme = useTheme();

    const [passwordMatch, setPasswordMatch] = useState<boolean>(true)
    const [password1, setPassword1] = useState<string>();
    const [password2, setPassword2] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailTypeError, setEmailTypeError] = useState<boolean>(false);
    const [nickNameError, setNickNameError] = useState<boolean>(false);
    const [nick_name, setNick_name] = useState<string>();
    const [password, setPassword] = useState<string>();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (password1 !== password2) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
            setPassword(password1);
        }
    }, [password1, password2])

    function validateEmail(email: string) {
        const textRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return textRegExp.test(email.toLowerCase());
    }

    const handleInscription = () => {
        setEmailError(false);
        setEmailTypeError(false);
        setNickNameError(false);
        if (!email) {
            setEmailError(true)
        } else if (!validateEmail(email)) {
            setEmailTypeError(true)
        }
        if (!nick_name) { setNickNameError(true) }
        else if (password && nick_name && email && !emailError && !emailTypeError && !nickNameError && passwordMatch) {
            dispatch(authActions.createProfile({ nick_name, email, password }));
            history.push('/myProfile');
        }

    };



    return (
        <MainCard title="S'inscrire">
            <Box display="flex" flexDirection='column' margin={theme.spacing(1)}>
                <Box display="flex" flexDirection='row' alignItems="center" margin={theme.spacing(1)} padding={theme.spacing(1)}>

                    <Box display="flex" flexDirection="column">

                        <TextField
                            label='Pseudonyme'
                            style={{ margin: theme.spacing(0, 1, 0, 1) }}
                            name='nick_name'
                            error={nickNameError}
                            helperText={nickNameError && "Il vous faut un pseudonyme"}
                            onChange={(e) => setNick_name(e.target.value)} />
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <TextField
                            label="E-Mail"
                            style={{ margin: theme.spacing(0, 1, 0, 1) }}
                            type="email"
                            name='email'
                            error={emailError || emailTypeError}
                            helperText={(emailError || emailTypeError) && "Il vous faut un Email valide"}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' alignItems="flex-start" margin={theme.spacing(1)} padding={theme.spacing(1)}>
                    <Box display='flex' flexDirection='row' alignItems="center">
                        <TextField name='password' error={passwordMatch} helperText={passwordMatch && "Les mots de passe "} type='password' style={{ margin: theme.spacing(0, 1, 0, 1) }} onChange={(e) => setPassword1(e.target.value)} />
                        <TextField name='password' error={passwordMatch} helperText={passwordMatch && "doivent être identiques !"} type='password' style={{ margin: theme.spacing(0, 1, 0, 1) }} onChange={(e) => setPassword2(e.target.value)} />
                    </Box>
                </Box >
                <Box><Button variant="contained" onClick={() => handleInscription()}>s'inscrire </Button></Box>
            </Box >
        </MainCard >
    )
}
export default UserCreation;