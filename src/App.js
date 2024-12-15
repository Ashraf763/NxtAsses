import './App.css'

import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Wrapper from './components/Wrapper'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Wrapper} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found"/>
  </Switch>
)
export default App
