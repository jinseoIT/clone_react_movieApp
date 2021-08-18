import React from "react";

function Movie({movieName}) {
  return <h1>I like {movieName}</h1>
}

function App() {
  return (
    <div>
      <div className="App"></div>
      <div><Movie movieName="포화속으로" /></div>
      <div><Movie movieName="어바웃 타임" /></div>
      <div><Movie movieName="내머릿속의 지우기"/></div>
    </div>
  );
}

export default App;
