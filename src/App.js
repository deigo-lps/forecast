import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/List";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { errorActions } from "./store";

function App() {
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const searchData = useSelector((state) => state.search.searchData);
  const hasSelected = useSelector((state) => state.forecast.hasSelected);
  const history = useSelector((state) => state.history.history);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const hasError = useSelector((state) => state.error.hasError);
  const message = useSelector((state) => state.error.message);
  const dispatch = useDispatch();

  var historyArray = [];
  if (history) {
    for (var key of Object.keys(history)) {
      historyArray.unshift(history[key]);
    }
  }

  const handleErrorOk = () => {
    dispatch(errorActions.removeError());
  };

  return (
    <>
      {hasError && <Modal h2="Error." p={message} onClick={handleErrorOk} />}
      {isLoggedIn ? (
        <>
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
