import './App.css'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Wrapper from './components/Wrapper'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Wrapper} />
    <Route component={NotFound} />
  </Switch>
)
export default App
