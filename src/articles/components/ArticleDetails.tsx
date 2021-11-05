import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import MainCard from '../../common/components/MainCard';
import { Articles } from '../../Blogeek-library/models/Articles';
import { useTypedSelector } from '../../redux/rootReducer';
import RootState from '../../redux/rootState';
import { formatDate } from '../../common/services/formatDate';


interface ArticleDetailsProps {

}

const ArticleDetails: React.FC<ArticleDetailsProps> = (props) => {
  const param: any = useParams();
  const { id } = param;
  const theme = useTheme();
  const history = useHistory();
  const { data } = useTypedSelector((state: RootState) => state.articles)

  const [selectedArticle, setSelectedArticle] = useState<Articles>(data.filter((article: Articles) => article.id === id)[0]);

  useEffect(() => {
    setSelectedArticle(data.filter((article: Articles) => article.id === id)[0])

  }, [id])

  return (<><MainCard title={`${selectedArticle.title}`}>

    <Box style={{ padding: theme.spacing(1) }}>
      <Typography>{selectedArticle.subtitle}</Typography>
    </Box >
    <Box display="flex" flexDirection="row" ><Typography style={{ padding: theme.spacing(1) }}>{formatDate(selectedArticle.date_of_write)}</Typography>
      {selectedArticle.creator && <Typography style={{ padding: theme.spacing(1) }}>Par  {selectedArticle.creator.nick_name}</Typography>}
    </Box>
    <Box><Typography>{selectedArticle.content}</Typography></Box>
  </MainCard>
    <Button variant="contained" onClick={() => history.push('/articles')} > Retour</Button>
  </>)
}

export default ArticleDetails;