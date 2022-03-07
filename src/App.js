import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import List from "./components/List";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import { historyActions } from "./store";

function App() {
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const searchData = useSelector((state) => state.search.searchData);
  const hasSelected = useSelector((state) => state.forecast.hasSelected);
  const history = useSelector(state => state.history.history);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://teste-accurate-default-rtdb.firebaseio.com/forecast.json`
      );
      const data = await response.json();
      dispatch(historyActions.setHistory(data || {}));
    }
    getData();
  }, []);

  var historyArray = [];
  if(history){
    for(var key of Object.keys(history)){
      historyArray.unshift(history[key])
    }
  }

  return (
    <>
      <Search />
      {hasSearched && <List title="Search Results" data={searchData} />}
      {hasSelected && <Forecast />}
      <List title="Previous Cities" clear={true} data={historyArray}/>
    </>
  );
}

export default App;
