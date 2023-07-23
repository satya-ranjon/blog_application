import { Link } from "react-router-dom";
import { images } from "../../constants";
import MainLayout from "../../layouts/MainLayout";
import BreadCrumbs from "./container/BreadCrumbs";
import SuggestedArticles from "./container/SuggestedArticles";
import Comments from "../../components/comment/Comments";
import SocialShareButtons from "../../components/SocialShareButtons";
import Modal from "../../components/Modal";
import { CiShare1 } from "react-icons/ci";
import { useState } from "react";

// import ArticleDetailsSkeleton from "../../components/skeleton/ArticleDetailsSkeleton";

const breadcrumbsData = [
  { link: "/", name: "Home" },
  { link: "/blog", name: "Blog" },
  { link: "/article-details/251", name: "Article Title" },
];
const SuggestedArticlesData = [
  {
    _id: 1,
    image: images.article,
    title: "Help children get better education",
    createdAt: "2020-05-18T14:10:30Z",
  },
  {
    _id: 2,
    image: images.article,
    title: "Help children get better education",
    createdAt: "2020-05-18T14:10:30Z",
  },
];
const ArticleDetails = () => {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const handleModel = () => {
    setModelIsOpen((prv) => !prv);
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-4 sm:px-20 lg:px-5 xl:px-0 font-roboto">
        <div className="lg:grid gap-4 xl:gap-8 grid-cols-12  ">
          {/* <ArticleDetailsSkeleton /> */}
          <article className="col-span-8">
            <BreadCrumbs data={breadcrumbsData} />
            <img
              src={images.article}
              alt=" article "
              className=" w-full rounded-lg h-[220px] sm:h-[300px]  lg:h-[450px] xl:h-[550px]"
            />
            <Link
              to={`/blog?search=education`}
              className=" text-sm font-normal text-sky-500 uppercase inline-block py-3">
              EDUCATION
            </Link>

            <div className="flex justify-between ">
              <h1 className="text-2xl font-semibold text-dark-soft	">
                Help children get better education Help children get better
                education Help children get get getbetter education Help
                children get better education
              </h1>
              <div className=" w-16">
                <button
                  className="text-3xl text-dark-light hover:text-dark-soft duration-200"
                  onClick={handleModel}>
                  <CiShare1 />
                </button>
              </div>
            </div>

            <p className=" font-opensans font-normal text-base text-dark-light	py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Egestas purus viverra accumsan in
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>
            {/* Comments  */}
            <Comments />
          </article>
          {/* SideBar  */}
          <div className=" w-full col-span-4">
            <SuggestedArticles articles={SuggestedArticlesData} />
            <SocialShareButtons />
          </div>
        </div>
      </section>
      <Modal isOpen={modalIsOpen} onClose={handleModel}>
        <SocialShareButtons />
      </Modal>
    </MainLayout>
  );
};

export default ArticleDetails;
