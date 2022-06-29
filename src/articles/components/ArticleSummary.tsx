import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { useHistory } from 'react-router';
import MainCard from '../../common/components/MainCard';
import { formatDate } from '../../common/services/formatDate';
import { Articles } from '../../Blogeek-library/models/Articles';


interface ArticleSummaryProps {
  article: Articles;
}

const ArticleSummary: React.FC<ArticleSummaryProps> = (props) => {
  const { article } = props;
  const theme = useTheme();
  const history = useHistory();

  const handleShowFullArticle = (id: string) => {
    history.push(`articles/${id}`);
  }

  return (<MainCard title={article.title}>

    <Box style={{ padding: theme.spacing(3) }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between">
      <Box padding={theme.spacing(1, 0, 1, 0)}>
        <Typography variant="h5">{article.subtitle}</Typography>
      </Box >
      <Box display="flex" flexDirection="row" >
        <Typography style={{ padding: theme.spacing(1, 0, 1, 5) }}>{formatDate(article.date_of_write)}
        </Typography>

        {article.creator && <Typography style={{ padding: theme.spacing(1, 0, 1, 1) }}>Par {article.creator.nick_name}</Typography>}
      </Box>

      <Box padding={theme.spacing(2, 0, 2, 0)}>
        <Typography style={{ textOverflow: "ellipsis", wordWrap: "break-word", overflow: "hidden", height: "7rem" }}>{article.content}</Typography>
      </Box>
      <Box padding={theme.spacing(1)} display="flex" flexDirection="row" justifyContent="flex-end" >
        <Button onClick={() => handleShowFullArticle(article.id)} variant='contained'>Voir la suite</Button>
      </Box>
    </Box>

  </MainCard >
  )
}

export default ArticleSummary;