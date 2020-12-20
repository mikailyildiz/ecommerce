// import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

import { Route, Switch, useHistory } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import AuthenticatedRoute from './components/ui/AuthenticatedRoute'

import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'
import CartPage from './components/pages/CartPage'
import LoginPage from './components/pages/LoginPage'

import HeaderMenu from './components/ui/HeaderMenu'
import FooterMenu from './components/ui/FooterMenu'

import { connect } from 'react-redux'
import { getProfile, logoutUser } from './actions/user'
import { getLocalStore, LocalStoreRemoveItem } from './utils'
import { useEffect } from 'react'

function App(props) {
  const history = useHistory()

  useEffect(() => {
    const storeUser = getLocalStore('user')
    if (storeUser) props.getProfile({ username: '', password: '' })
  }, [])

  const onLogout = () => {
    props.logoutUser()
    LocalStoreRemoveItem('user')
    history.push('/products')
  }

  return (
    <div className="App">
      <HeaderMenu profile={props.user.profile} onLogout={onLogout} />
      <Container>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <AuthenticatedRoute path="/cart" component={CartPage} />
        </Switch>
      </Container>
      <FooterMenu />
    </div>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = {
  getProfile,
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
