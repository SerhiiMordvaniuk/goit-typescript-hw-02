import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  setQuery: (arg: string) => void;
  clearImages: () => void;
  prevQuery: string;
};

const SearchBar = ({ setQuery, clearImages, prevQuery }: SearchBarProps) => {
  const hansleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      elements: { input: { value: string } };
      reset: () => void;
    };
    let newQuery: string = form.elements.input.value.trim();
    if (newQuery.trim() === "") {
      toast.error("Please, enter your query");
      return;
    } else if (newQuery.trim() === prevQuery) {
      toast.error("Please, enter new query");
      form.reset();
      return;
    } else if (newQuery.length < 3) {
      toast.error("The query must be at least three letters long");
      form.reset();

      return;
    } else {
      clearImages();
      setQuery(newQuery);
      form.reset();
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
