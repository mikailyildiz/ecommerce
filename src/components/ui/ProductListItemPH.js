import { Card, Button, Icon, Placeholder } from 'semantic-ui-react'

const ProductListItemPH = () => {
  return (
    <Card>
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
        </Placeholder>
      </Card.Content>
      <Card.Content extra>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
        </Placeholder>
      </Card.Content>
    </Card>
  )
}

export default ProductListItemPH
