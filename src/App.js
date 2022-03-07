import React from "react";
import { useSelector } from "react-redux";
import List from "./components/List";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Login from "./components/Login";

function App() {
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const searchData = useSelector((state) => state.search.searchData);
  const hasSelected = useSelector((state) => state.forecast.hasSelected);
  const history = useSelector((state) => state.history.history);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  var historyArray = [];
  if (history) {
    for (var key of Object.keys(history)) {
      historyArray.unshift(history[key]);
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <Search />
          {hasSearched && <List title="Search Results" data={searchData} />}
          {hasSelected && <Forecast />}
          <List title="Previous Cities" clear={true} data={historyArray} />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
