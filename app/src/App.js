import React from 'react'
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import ProductSingle from "./component/ProductSingle";
import CartPage from "./component/CartPage";
import Signin from "./component/Signin";
import Shipping from "./component/Shipping";

function App() {

  return (
    <>

      <div className="grid-container">
          <Router>
              <Header />
              <main>
                  <Switch>
                      <Route component={Home}  path="/" exact />
                      <Route component={ProductSingle}  path="/product/:id" exact />
                      <Route component={CartPage}  path="/cart/:id?" exact />
                      <Route component={Signin}  path="/signin" exact />
                      <Route component={Shipping}  path="/shipping" exact />
                  </Switch>
              </main>
              <footer className="row center">
                  <p>All right resaeved</p>
              </footer>
          </Router>



    </div>
    </>
  )
}

export default App
