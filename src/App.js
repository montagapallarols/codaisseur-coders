import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./components/LoginPage";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, []);


  return (
    <div className="App">
      <Toolbar/>
     <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
