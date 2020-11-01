import React from "react";
import "../styles/articleItem.css";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

function ArticleItem({ article }) {
  return (
   <a href={article.url}>
      <div className="article-item">
        <Card>
          <CardHeader title={article.title} />

          <CardContent>
            <img src={article.urlToImage} alt="" className="article__image" />
            <Typography>{article.author || article.source.name}</Typography>
            <Typography color="textSecondary">{article.publishedAt}</Typography>
          </CardContent>
        </Card>
      </div>
      </a>
  );
}

export default ArticleItem;
