// import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'
import HeaderMenu from './components/ui/HeaderMenu'
import FooterMenu from './components/ui/FooterMenu'

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </Container>
      <FooterMenu />
    </div>
  )
}

export default App
