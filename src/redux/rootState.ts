import ArticlesState from "../articles/models/articleState";
import AuthState from "../authentication/models/authState";
import LoadingState from "../loading/redux/LoadingState";
import UsersState from "../users/models/usersState";

export default interface RootState {
  articles: ArticlesState;
  users: UsersState;
  authentication: AuthState;
  loading: LoadingState;
}