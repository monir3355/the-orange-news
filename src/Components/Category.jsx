import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Pages/News/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  return (
    <div>
      <h2>Total Category news: {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
