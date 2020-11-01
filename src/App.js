import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import ArticlePage from "./components/ArticlePage";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ArticlePage} />
          <Route path="/topics/:keyword" component={Topics} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
