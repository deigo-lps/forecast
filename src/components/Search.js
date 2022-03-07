import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { searchActions } from "../store";
import loading from "../images/logo512.png";
import style from "./Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    async function fetchSearch(city) {
      setIsLoading(true);
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=81f0eb29c6d82794c74bebe993837906`
      );
      const data = await response.json();
      dispatch(searchActions.setSearchData(data));
      dispatch(searchActions.setHasSearched(true));
      setIsLoading(false);
    }
    const debounceSearch = setTimeout(async () => {
      if (input.trim().length !== 0) await fetchSearch(input);
    }, 1000);
    return () => {
      clearTimeout(debounceSearch);
    };
  }, [input, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={style.search}>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} placeholder="Pesquise" />
      </form>
      {isLoading && (
        <div className={style.search__spinner}>
          <img src={loading} />
        </div>
      )}
    </Card>
  );
};

export default Search;
