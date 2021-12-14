
import { Typography } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "./articles/components/ArticleDetails";
import ArticlesList from "./articles/pages/ArticlesList";
import PostArticle from "./articles/pages/PostArticle";
import MyProfile from "./authentication/components/MyProfile";
import UserCreation from "./authentication/components/UserCreation";
import { useTypedSelector } from "./redux/rootReducer";
import RootState from "./redux/rootState";
import UserModeration from "./users/components/UserModeration";
import UsersList from './users/pages/UsersList';

interface AppRoutesProps { };

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
    const auth = useTypedSelector((state: RootState) => state.authentication.data);

    return (
        <Switch>
            <Route exact path="/"><Typography>Hello World</Typography></Route>
            <Route exact path="/inscription"><UserCreation /></Route>
            <Route exact path="/articles"><ArticlesList /></Route>
            <Route exact path='/articles/post'> <PostArticle /> </Route>
            <Route exact path='/articles/:id'> <ArticleDetails /> </Route>
            {
                auth && (
                    <>
                        <Route exact path="/users"><UsersList /></Route>
                        <Route exact path="/myProfile"><MyProfile /></Route>
                        <Route exact path="/users/:id"><UserModeration /></Route>
                    </>
                )
            }
        </Switch>
    )
}


export default AppRoutes;