import { Assignment, Forum, Home, Person, SupervisorAccount, CollectionsBookmark } from "@material-ui/icons";
import { NoteAlt } from "@mui/icons-material";
import { DrawerRouteConfig } from "./DrawerRouteConfig";

export const RoutesConfig: DrawerRouteConfig[] = [

  { id: "homePanel", type: "item", title: "home", icon: <Home fontSize="large" />, getUrl: () => "/" },
  {
    id: "articlesPanel", type: "collapse", title: "Les articles", icon: <Assignment fontSize="large" />, children: [
      { id: "postArticle", type: "item", title: "Poster un article", getUrl: () => "/articles/post", icon: <NoteAlt fontSize="small" /> },
      { id: "showArticles", type: "item", title: "Tout les articles", getUrl: () => "/articles", icon: <CollectionsBookmark fontSize="small" /> },
    ]
  },
  {
    id: "chatPanel", type: 'item', title: "Le chat", icon: <Forum fontSize="large" />, getUrl: () => "/chat"
  },
  {
    id: "usersPanel", type: 'collapse', title: "Les utilisateurs", icon: <Person fontSize="large" />, children:
      [{ id: "usersPanel", type: "item", title: "tout les utilisateurs", getUrl: () => "/users", icon: <SupervisorAccount fontSize="small" /> }]
  },
];

export default RoutesConfig;