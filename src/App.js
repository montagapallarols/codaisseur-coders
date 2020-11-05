import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./components/LoginPage";


function App() {
  return (
    <div className="App">
     <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
