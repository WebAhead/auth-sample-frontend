import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Users from "./pages/Users"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
