import { Container, Image, Menu, Icon, Label } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <Menu fixed="top" borderless>
      <Container>
        <Menu.Item as={Link} to="/" exact="true">
          <Image size="mini" src="/logo.png" />
          My Glasses Shop
        </Menu.Item>
        <Menu.Item as={NavLink} to="/products">
          Products
        </Menu.Item>
        <Menu.Item as="a" position="right">
          <Icon name="cart" /> Cart
          <Label style={{ marginLeft: '.5em' }} circular color="blue">
            22
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default HeaderMenu
