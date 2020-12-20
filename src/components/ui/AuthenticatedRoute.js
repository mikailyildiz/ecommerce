import { Route, Redirect } from 'react-router-dom'
import { getLocalStore } from '../../utils'

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getLocalStore('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default AuthenticatedRoute
