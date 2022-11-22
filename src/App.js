import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import NewWeather from './components/NewWeather'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={NewWeather} />
      <Route path="/Profile" component={ProfilePage} />
    </Switch>
  </BrowserRouter>
)

export default App
