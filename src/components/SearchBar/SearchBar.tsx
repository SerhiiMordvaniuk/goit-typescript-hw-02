import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setQuery, clearImages, prevQuery }) => {
  const hansleSubmit = (e) => {
    e.preventDefault();
    let newQuery = e.target.elements.input.value;
    if (newQuery.trim() === "") {
      toast.error("Please, enter your query");
      return;
    } else if (newQuery.trim() === prevQuery) {
      toast.error("Please, enter new query");
      e.target.elements.input.value = "";
      return;
    } else if (newQuery.length < 3) {
      toast.error("The query must be at least three letters long");
      e.target.elements.input.value = "";
      return;
    } else {
      clearImages();
      setQuery(newQuery);
      e.target.elements.input.value = "";
    }
  };

  return (
    <header className={s.search}>
      <form className={s.form} onSubmit={hansleSubmit}>
        <input
          name="input"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.btn}>
          {" "}
          <CiSearch size="25" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
