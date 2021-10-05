import "./App.css";
import Navbar1 from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar1 />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
