
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import ArticleSummary from "../components/ArticleSummary";
import articlesActions from "../redux/articlesActions";

import { Articles } from '../../Blogeek-library/models/Articles';
import Loading from "../../common/components/Loading";


interface ArticlesListProps { }
const ArticlesList: React.FC<ArticlesListProps> = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state: RootState) => state.articles);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [articles, setArticles] = useState<Articles>(data)
  useEffect(() => {
    if (!data) {
      dispatch(articlesActions.getArticles());
      setArticles(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return data && data.length ? data.map((article: Articles) => (
    <ArticleSummary article={article} />
  ))

    : <Loading />

}
export default ArticlesList;