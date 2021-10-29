import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/vehicles" component={Vehicles} exact />
      </Switch>
    </Router>
  )
}

export default App
