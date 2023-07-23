import ArticleCard from "../../../components/ArticleCard";
import ArticleCardSkeleton from "../../../components/skeleton/ArticleCardSkeleton";
import { images } from "../../../constants";
import articles from "../../../data/article";

const Articles = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-20 lg:px-5 xl:px-0 sm:grid grid-cols-2 gap-3 lg:gap-8 xl:gap-16 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}

        <ArticleCardSkeleton />
      </div>
      <div className="container  mx-auto flex justify-center items-center text-center mb-16 mt-4 ">
        <button className="flex justify-between items-center gap-2 border-2 border-sky-500 text-sky-500 p-3 px-6 text-xl font-bold rounded-md ">
          <span>More articles</span>
          <img src={images.arrow} alt="arrow icon" />
        </button>
      </div>
    </>
  );
};

export default Articles;
