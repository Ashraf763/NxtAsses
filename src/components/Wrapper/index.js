import './index.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import Home from '../Home'
import Assessment from '../Assessment'
import Results from '../Results'
import NotFound from '../NotFound'

const Wrapper = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/assessment" component={Assessment} />
        <Route exact path="/results" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Wrapper
