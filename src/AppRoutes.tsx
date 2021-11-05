
import { Typography } from "@mui/material";
import { Route, Switch } from "react-router-dom"
import ArticlesList from "./articles/pages/ArticlesList"
import ArticleDetails from "./articles/components/ArticleDetails";
import UsersList from './users/pages/UsersList'
import PostArticle from "./articles/pages/PostArticle";
import MyProfile from "./authentication/components/MyProfile";

interface AppRoutesProps { };

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/"><Typography>Hello World</Typography></Route>
      <Route exact path="/articles"><ArticlesList /></Route>
      <Route exact path='/articles/post'> <PostArticle /> </Route>
      <Route exact path='/articles/:id'> <ArticleDetails /> </Route>
      <Route exact path="/users"><UsersList /></Route>
      <Route exact path="/myProfile"><MyProfile /></Route>
    </Switch>
  )
}


export default AppRoutes;