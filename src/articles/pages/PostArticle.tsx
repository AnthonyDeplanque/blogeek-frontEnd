import { Button, TextField, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import MainCard from "../../common/components/MainCard"
import { ROLE } from '../../Blogeek-library/models/Role';
import { useTypedSelector } from "../../redux/rootReducer"
import RootState from "../../redux/rootState"
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import articlesActions from "../redux/articlesActions";
import MainDialog from "../../common/components/MainDialog";

interface PostArticleProps { };

const PostArticle: React.FC<PostArticleProps> = (props) => {
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [postDone, setPostDone] = useState<boolean>(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const handlePostArticle = () => {
    setPostDone(true);
    dispatch(articlesActions.postArticle({ title, subtitle, content, id_user: auth?.id }))
  }

  const auth = useTypedSelector((state: RootState) => state.authentication.data);
  return (
    auth?.roles?.includes(ROLE.ROLE_CREATOR) || auth?.roles?.includes(ROLE.ROLE_ADMIN) ? (
      <>
        {postDone && <MainDialog title="article ajouté !" open={postDone} onClose={() => setPostDone(false)}>
          <Typography>vous avez bien ajouté l'article !</Typography>
        </MainDialog>}
        <MainCard title="Poster un article">
          <Box width="100%" padding={theme.spacing(2)}>
            <TextField label="titre" style={{ width: "100%" }} name="title" onChange={(e) => setTitle(e.target.value)}>
            </TextField>
          </Box>

          <Box width="100%" padding={theme.spacing(2)}>
            <TextField label="sous titre" style={{ width: "100%" }} name="subtitle" onChange={(e) => setSubtitle(e.target.value)}>
            </TextField>
          </Box>

          <Box width="100%" padding={theme.spacing(2)}>
            <TextField
              label="contenu"
              multiline
              rows={8}
              style={{ width: "100%" }}
              name="content"
              onChange={(e) => setContent(e.target.value)}>
            </TextField>
          </Box>

          <Box width="100%" display="flex" flexDirection="row" justifyContent="center"><Button variant="contained" onClick={handlePostArticle}>Poster l'article</Button></Box>
        </MainCard>
      </>
    )
      : (<Typography>Vous devez être un créateur de contenu pour pouvoir poster un article</Typography>))
}
export default PostArticle