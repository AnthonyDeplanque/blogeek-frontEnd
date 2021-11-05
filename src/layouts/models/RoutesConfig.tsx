import { Assignment, Home, Person, ThreeSixty } from "@material-ui/icons";
import { DrawerRouteConfig } from "./DrawerRouteConfig";

export const RoutesConfig: DrawerRouteConfig[] = [
  { id: "home", type: "item", title: "home", icon: <Home />, getUrl: () => "/" },
  {
    id: "articles", type: "collapse", title: "Les articles", icon: <Assignment />, children: [
      { id: "Poster un article", type: "item", title: "Poster un article", getUrl: () => "/articles/post", },
      { id: "articles", type: "item", title: "articles", getUrl: () => "/articles" },
      { id: "test3", type: "item", title: "test3", getUrl: () => "/test3", },
    ]
  },
  { id: "users", type: "item", title: "utilisateurs", getUrl: () => "/users", icon: <Person /> },
];

export default RoutesConfig;