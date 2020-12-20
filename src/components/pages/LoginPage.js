import { Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { getProfile } from '../../actions/user'
import { setLocalStore } from '../../utils'

const messages = {
  username: 'Enter Username',
  password: 'Enter Password',
}

const LoginPage = (props) => {
  const [loginProgress, setLoginProgress] = useState(false)

  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  })

  const [errorMessages, setErrorMessages] = useState({})
  const [errorCount, setErrorCount] = useState(1)

  const onLogin = () => {
    if (errorCount > 0) return
    setLoginProgress(true)
    props.getProfile(loginValues)
  }

  useEffect(() => {
    if (loginProgress) {
      setLoginProgress(false)
      setLocalStore('user', JSON.stringify(props.user))
      props.history.push('/products')
    }
  }, [props.user.profile])

  const onInputChange = (e) => {
    const { name, value } = e.target
    setLoginValues({
      ...loginValues,
      [name]: value,
    })
  }

  useEffect(() => {
    validationValues()
  }, [loginValues])

  const validationValues = () => {
    let errors = {}
    let count = 0

    for (const key in loginValues) {
      if (loginValues[key].length < 1) {
        errors[key] = messages[key]
        count++
      } else delete errors[key]
    }

    setErrorMessages(errors)
    setErrorCount(count)
  }

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: '100vh', minHeight: '450px' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 380 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src="/logo.png" /> Login
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="on"
                onChange={onInputChange}
              />

              <button
                disabled={errorCount > 0}
                className="ui blue large fluid button"
                onClick={onLogin}
              >
                Login
              </button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = {
  getProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
