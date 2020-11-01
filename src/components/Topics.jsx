import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getKeyword } from "../store/actions";
import "../styles/articlepage.css";
import ArticleItem from "./ArticleItem";
import Sidebar from "../layouts/Sidebar";
import Spinner from "./Spinner";

function ArticlePage(props) {
  const { getKeyword, keyword } = props;

  useEffect(() => {
    getKeyword(keyword);
  }, [keyword, getKeyword]);

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
      <div className="article-page">{articleComp}</div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    keyword: ownProps.match.params.keyword,
  };
};

export default connect(mapStateToProps, { getKeyword })(ArticlePage);
