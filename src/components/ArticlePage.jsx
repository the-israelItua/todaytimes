import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions";
import "../styles/articlepage.css";
import { Grid } from "@material-ui/core";
import ArticleItem from "./ArticleItem";
import Sidebar from "../layouts/Sidebar";
import Spinner from "./Spinner";
import Download from "./Download";

function ArticlePage(props) {
  const { getArticles } = props;
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const articleComp =
    props.articles.length === 0 ? (
      <Spinner />
    ) : (
      props.articles[0].data.articles.map((article) => (
        <ArticleItem key={article.url} article={article} />
      ))
    );
  return (
    <>
      <Sidebar />
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={7}>
          <div className="article-page">{articleComp}</div>
        </Grid>

        <Grid item md={4}>
          <Download />
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps, { getArticles })(ArticlePage);
