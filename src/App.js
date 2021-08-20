import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    // githubPage 쉽게 관리를위해 HashRouter 사용
    // #이 보기 싫으면 BrowserRouter 사용 권장
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );

}

export default App;