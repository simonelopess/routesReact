import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from './Components/Produtos'
import Contato from "./Components/Contato";
import Produto from './Components/Produto';
import NotFound from "./Components/NotFound";

import './App.css'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header/>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Produtos}/>
              <Route path="/contato" component={Contato}/>
              <Route path="/produto/:id" component={Produto} />
              <Route path="/*" component={NotFound}/>
            </Switch>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
