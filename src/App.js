import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import {Switch, Route,Redirect} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

export default App
/*        <Route exact path="/about" component={About}/>
 */
