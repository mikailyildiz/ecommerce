import { Container, Image, Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <Menu fixed="top" borderless>
      <Container text>
        <Menu.Item as={Link} to="/" exact="true">
          <Image size="mini" src="/logo.png" />
          My Glasses Shop
        </Menu.Item>
        <Menu.Item as={NavLink} to="/products">
          Products
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default HeaderMenu
