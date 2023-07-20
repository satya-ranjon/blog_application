import ArticleCard from "../../../components/ArticleCard";
import articles from "../../../data/article";

const Articles = () => {
  return (
    <div className="container mx-auto px-4 sm:px-20 lg:px-5 xl:px-0 sm:grid grid-cols-2 gap-3 lg:gap-8 xl:gap-16 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
