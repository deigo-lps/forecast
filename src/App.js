import React from "react";
import { useSelector } from "react-redux";
import List from "./components/List";
import Search from "./components/Search";

const DUMMY_DATA = [
  {id:1,name:'Rio Preto',country:'BR',state:'São Paulo'},
  {id:2,name:'São José do Rio Preto',country:'BR',state:'São Paulo'},
  {id:3,name:'Calor meudeus mt calor',country:'BR',state:'São Paulo'},
]


function App() {
  const hasSearched = useSelector(state=>state.search.hasSearched);
  const searchData = useSelector(state=>state.search.searchData);
  return (
    <>
      <Search/>
      {hasSearched  && <List title="Search Results" data={searchData} />}
      <List title="Previous Cities" data={DUMMY_DATA}/>
    </>
  );
}

export default App;
