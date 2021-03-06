import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import "./style.css";
import Iarna from "./pages/iarna/Iarna";
import Primavara from "./pages/primavara/Primavara";
import Flori from "./pages/flori/Flori";
import Quilling from "./pages/quilling/Quilling";
import Origami from "./pages/origami/Origami";
import Tablouri from "./pages/tablouri/Tablouri";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Content />
          <Footer />
        </Route>
        <Route path="/iarna">
          <Iarna />
        </Route>
        <Route path="/primavara">
          <Header />
          <Primavara />
        </Route>
        <Route path="/flori">
          <Header />
          <Flori />
        </Route>
        <Route path="/quilling">
          <Header />
          <Quilling />
        </Route>
        <Route path="/origami">
          <Header />
          <Origami />
        </Route>
        <Route path="/tablouri">
          <Header />
          <Tablouri />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
