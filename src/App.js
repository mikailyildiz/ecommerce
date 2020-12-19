// import logo from './logo.svg'
import './App.css'
import { Route, Switch, NavLink } from 'react-router-dom'
import ProductsPage from './components/pages/ProductsPage'

function App() {
  return (
    <div className="App">
      <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact render={() => <h1>Welcome Home</h1>} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
    </div>
  )
}

export default App
