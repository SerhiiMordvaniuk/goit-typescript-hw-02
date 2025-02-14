import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchSearch from "./gallery-api";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import { Data, Gallery, Information, ModalInfo } from "./App.types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Gallery>([]);
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<ModalInfo>();
  const [scroll, setScroll] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(false);

  useEffect(() => {
    let totalPages = 0;
    async function fethGellery() {
      try {
        setLoadMore(false);
        setLoader(true);
        setError(false);
        const data: Information = await fetchSearch(query, page);
        if (!first) {
          setImages(data);
          setFirst(true);
        } else {
          if (data === undefined) {
            return;
          } else {
            if (data.total_pages === 0) {
              toast.error("No results");
            }
            if (data.total > 12) {
              setLoadMore(true);
            } else {
              setLoadMore(false);
            }
            totalPages = data.total_pages;
            if (page === totalPages) {
              setLoadMore(false);
              setLoadMore(false);
              toast.success("No more results", {
                position: "bottom-center",
              });
            }
            setImages((prev) => [...prev, ...data.results]);
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fethGellery();
  }, [query, page, first]);

  useEffect(() => {
    if (scroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [scroll]);

  const openModal = (): void => {
    setIsOpen(true);
    setScroll(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setScroll(false);
  };

  const clearImages = (): void => {
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleClick = (item: ModalInfo): void => {
    openModal();
    setModalImg(item);
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <SearchBar
        setQuery={setQuery}
        clearImages={clearImages}
        prevQuery={query}
      />
      {error && <ErrorMessage />}
      <ImageGallery gallery={images} onClick={handleClick} />

      <>{loader && <Loader />}</>
      <>{loadMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}</>
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        alt={modalImg?.alt_description}
        image={modalImg?.modalSrc}
      />
    </>
  );
}

export default App;
