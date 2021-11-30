import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import SingleVehicle from './pages/SingleVehicle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GetQuote from './pages/GetQuote'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/vehicles" component={Vehicles} exact />
        <Route path="/vehicles/:id" component={SingleVehicle} exact />
        <Route path="/quote" component={GetQuote} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/admin/userlist" component={Users} exact />
      </Switch>
    </Router>
  )
}

export default App
