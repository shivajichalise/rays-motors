import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import SingleVehicle from './pages/SingleVehicle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/vehicles" component={Vehicles} exact />
        <Route path="/vehicles/:id" component={SingleVehicle} exact />
      </Switch>
    </Router>
  )
}

export default App
