import { Container, Image, Menu, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderMenu = (props) => {
  return (
    <Menu fixed="top" borderless>
      <Container>
        <Menu.Item as={Link} to="/" exact="true">
          <Image size="mini" src="/logo.png" /> My Glasses Shop
        </Menu.Item>
        <Menu.Item as={Link} to="/products">
          Products
        </Menu.Item>
        <Menu.Menu position="right">
          {props.profile.status && !props.profile.id && (
            <Menu.Item as={Link} to="/login">
              <Icon name="user" /> Login
            </Menu.Item>
          )}
          {props.profile.id && (
            <div
              role="listbox"
              aria-expanded="false"
              className="ui item simple dropdown"
              tabIndex="0"
            >
              <div
                aria-atomic="true"
                aria-live="polite"
                role="alert"
                className="divider text"
              >
                {props.profile.title}
              </div>
              <i aria-hidden="true" className="dropdown icon"></i>
              <div className="menu transition">
                <div
                  role="option"
                  className="item"
                  style={{ minWidth: '160px' }}
                >
                  <img
                    src="/user/profile.png"
                    className="ui mini circular image"
                  />
                  {props.profile.title}
                </div>
                <div className="divider"></div>
                <div role="option" className="item" onClick={props.onLogout}>
                  <i aria-hidden="true" className="sign-out icon"></i> Logout
                </div>
              </div>
            </div>
          )}

          <Menu.Item as={Link} to="/cart">
            <Icon name="cart" /> Cart
            {/* <Label style={{ marginLeft: '.5em' }} circular color="blue">
              22
            </Label> */}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default HeaderMenu
