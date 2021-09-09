import {BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header"
import About from "./components/about/About"
import ServiceOffer from "./components/serviceOffer/ServiceOffer"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navigation} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ServiceOffer} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Contact} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Footer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
