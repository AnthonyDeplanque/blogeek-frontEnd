
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import MainCard from "../../common/components/MainCard";
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
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

  useEffect(() => {
    if (password1 !== password2)
    {
      setPasswordMatch(false);
    } else
    {
      setPasswordMatch(true);
      setPassword(password1);
    }
  }, [password1, password2])

  function validateEmail(email: string) {
    const textRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return textRegExp.test(email.toLowerCase());
  }

  const handleInscription = () => {
    if (!email) 
    {
      setEmailError(true)
    } else if (!validateEmail(email))
    {
      setEmailTypeError(true)
    }
    if (!nick_name) { setNickNameError(true) }
    else if (password && nick_name && email)
    {
      dispatch(authActions.createProfile({ nick_name, email, password }))
    }
  };



  return (
    <MainCard title="S'inscrire">
      <Box display="flex" flexDirection='column' margin={theme.spacing(1)}>
        <Box display="flex" flexDirection='row' alignItems="center" margin={theme.spacing(1)} padding={theme.spacing(1)}>
          <Typography>Pseudo</Typography>
          <Box display="flex" flexDirection="column">

            <TextField style={{ margin: theme.spacing(0, 1, 0, 1) }} name='nick_name' onChange={(e) => setNick_name(e.target.value)} />
            <Box display="flex" flexDirection='row' justifyContent="flex-end">
              <Typography variant="subtitle2" style={{ color: !nickNameError ? 'transparent' : 'red', transition: ".2s ease-in-out" }}>Il vous faut un pseudonyme !</Typography>
            </Box>
          </Box>

          <Typography>E-mail</Typography>
          <Box display="flex" flexDirection="column">
            <TextField style={{ margin: theme.spacing(0, 1, 0, 1) }} type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
            <Box display="flex" flexDirection='row' justifyContent="flex-end">
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle2" style={{ color: !emailError ? 'transparent' : 'red', transition: ".2s ease-in-out" }}>il vous faut un E-mail !</Typography>
                <Typography variant="subtitle2" style={{ color: !emailTypeError ? 'transparent' : 'red', transition: ".2s ease-in-out" }}>Le format de l'Email n'est pas correct !</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' alignItems="flex-start" margin={theme.spacing(1)} padding={theme.spacing(1)}>
          <Box display='flex' flexDirection='row' alignItems="center"><Typography>Mot de passe</Typography>
            <TextField name='password' type='password' style={{ margin: theme.spacing(0, 1, 0, 1) }} onChange={(e) => setPassword1(e.target.value)} />
            <TextField name='password' type='password' style={{ margin: theme.spacing(0, 1, 0, 1) }} onChange={(e) => setPassword2(e.target.value)} />
          </Box>
          <Box display="flex" flexDirection='row' justifyContent="flex-end">
            <Typography variant="subtitle2" style={{ color: passwordMatch ? 'transparent' : 'red', transition: ".2s ease-in-out" }}>Les mots de passe doivent être identiques !</Typography>
          </Box>
        </Box >
        <Box><Button onClick={() => handleInscription()}>s'inscrire </Button></Box>
      </Box >
    </MainCard >
  )
}
export default UserCreation;