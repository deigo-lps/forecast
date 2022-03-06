import React from "react";
import Card from "./components/Card";
import List from "./components/List";
import Search from "./components/Search";

const DUMMY_DATA = [
  {id:1,name:'Rio Preto'},
  {id:2,name:'São Paulo'},
  {id:3,name:'Curitiba'},
]


function App() {
  return (
    <>
      <Search/>
      <List data={DUMMY_DATA}/>
    </>
  );
}

export default App;
