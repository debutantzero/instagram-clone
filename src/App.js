import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Message from "./pages/Message";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/direct" component={Message} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
