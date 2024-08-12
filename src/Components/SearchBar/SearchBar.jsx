import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.search.value;
    if (input.trim() === "") {
      toast("Enter text to search for images", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "black",
          color: "#fff",
        },
      });

      return;
    }
    onSearch(value);
    form.reset();
  };

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.headerForm} onSubmit={handleSubmit}>
        <input
          className={css.headerInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          onChange={changeValue}
        />
        <button className={css.headerBtn} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
