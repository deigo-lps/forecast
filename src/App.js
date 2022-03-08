import React from "react";
import { useSelector } from "react-redux";
import List from "./components/List";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

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
          {/* <Modal h2="Erro." p="Ocorreu um erro com alguma requisição."/> */}
          <Navbar />
          <div className="main">
            <Search />
            {hasSearched && <List title="Search Results" data={searchData} />}
            {hasSelected && <Forecast />}
            <List title="Previous Cities" clear={true} data={historyArray} />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
