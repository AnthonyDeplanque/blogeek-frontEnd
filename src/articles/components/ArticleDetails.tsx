import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import MainCard from '../../common/components/MainCard';
import { Articles } from '../../Blogeek-library/models/Articles';
import { useTypedSelector } from '../../redux/rootReducer';
import RootState from '../../redux/rootState';
import { formatDate } from '../../common/services/formatDate';
import AvatarDisplayer from '../../common/components/AvatarDisplayer';
import { useDispatch } from 'react-redux';
import MainDialog from '../../common/components/MainDialog';
import articlesActions from '../redux/articlesActions';
import { ROLE } from '../../Blogeek-library/models/Role';


interface ArticleDetailsProps {

}

const ArticleDetails: React.FC<ArticleDetailsProps> = (props) => {
  const param: any = useParams();
  const { id } = param;
  const [deleteDisclaimer, setDeleteDisclaimer] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const theme = useTheme();
  const history = useHistory();
  const { data } = useTypedSelector((state: RootState) => state.articles)
  const auth = useTypedSelector((state: RootState) => state.authentication.data)
  const dispatch = useDispatch()

  const [selectedArticle, setSelectedArticle] = useState<Articles>(data.filter((article: Articles) => article.id === id)[0]);

  useEffect(() => {
    if (data)
    {
      setSelectedArticle(data.filter((article: Articles) => article.id === id)[0])
    } else
    {
      dispatch(articlesActions.getArticles());
      setDeleted(true);
    }
  }, [id])

  return (
    selectedArticle ? <MainCard style={{ minHeight: "80vh" }} title={`${selectedArticle.title}`}>
      {deleted && <Redirect exact to='/' />}

      {deleteDisclaimer &&
        <MainDialog onClose={() => setDeleteDisclaimer(false)} open={deleteDisclaimer}>
          <Box display='flex' flexDirection='row' justifyContent="center"> <Typography variant="body2">Etes vous sûrs de vouloir supprimer cet article ?</Typography></Box>

          <Box> <Button variant="contained" onClick={() => {
            dispatch(articlesActions.deleteArticle(id));
            setDeleted(true)
          }
          }>valider</Button>
            <Button variant="outlined" onClick={() => { setDeleteDisclaimer(false); }}>annuler</Button></Box>
        </MainDialog>
      }
      <Box style={{ padding: theme.spacing(3), height: '100%' }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between">
        <Box padding={theme.spacing(1, 0, 1, 0)}>
          <Typography variant="h5">{selectedArticle.subtitle}</Typography>
        </Box >

        <Box display="flex" flexDirection="column" >

          {selectedArticle.creator &&
            <Box display="flex" flexDirection="row" alignItems="center">
              {selectedArticle.creator.avatar && <AvatarDisplayer littleImage avatar={selectedArticle.creator.avatar} />}
              <Typography style={{ padding: theme.spacing(1, 0, 1, 1) }}>Par {selectedArticle.creator.nick_name}</Typography>
            </Box>
          }
          <Typography style={{ padding: theme.spacing(1, 0, 1, 5) }}>{formatDate(selectedArticle.date_of_write)}</Typography>
        </Box>

        <Box padding={theme.spacing(2, 0, 2, 0)}>
          <Typography>{selectedArticle.content}</Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <Button style={{ margin: theme.spacing(1) }} variant="contained" onClick={() => history.push('/articles')}>Retour</Button>
          {(auth?.roles?.includes(ROLE.ROLE_ADMIN) || auth?.roles?.includes(ROLE.ROLE_MODERATOR)) && <Button style={{ margin: theme.spacing(1) }} variant="contained" color='error' onClick={() => setDeleteDisclaimer(true)}>Supprimer</Button>}
        </Box>
      </Box>
    </MainCard>
      : <Typography> Aucun article ici...</Typography>
  )
}

export default ArticleDetails;