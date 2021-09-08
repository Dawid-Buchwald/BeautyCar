import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Footer from "./components/footer/Footer"
import Navigation from "./components/navigation/Navigation";
import Carousel from "./components/carousel/Carousel"
import About from "./components/about/About"
import ServiceOffer from "./components/serviceOffer/ServiceOffer"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navigation} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Carousel} />
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
