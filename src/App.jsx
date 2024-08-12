import { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import Error from "./Components/ErrorMessage/ErrorMessage";
import getImages from "./Api/image-api";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageModal from "./Components/ImageModal/ImageModal";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalArticles, setModalArticles] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function getImage() {
      setLoading(true);
      try {
        const data = await getImages(query, page);
        setHasMore(data.results.length > 0);
        setArticles((pervImg) => [...pervImg, ...data.results]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (query) getImage();
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setArticles([]);
    setHasMore(true);
  };

  function isOpenModal(article) {
    setOpenModal(true);
    setModalArticles(article);
  }

  function closeModal() {
    setOpenModal(false);
    setModalArticles(null);
  }

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {error && <Error />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} openModal={isOpenModal} />
      )}
      {articles.length > 0 && hasMore && <LoadMoreBtn loadMore={loadMore} />}
      {loading && <Loader />}
      <ImageModal
        image={modalArticles}
        isOpen={openModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
