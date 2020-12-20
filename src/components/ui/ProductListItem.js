import { Card } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'

const ProductListItem = (props) => {
  const { product } = props
  return (
    <Card>
      <div
        className="small centered image"
        style={{
          height: '200px',
          textAlign: 'center',
          background: 'none',
          padding: '40px',
          display: 'flex',
        }}
      >
        <img src={`/products/${product.id}.png`} style={{ margin: 'auto' }} />
      </div>
      <Card.Content>
        <Card.Header style={{ fontSize: '16px', minHeight: '41px' }}>
          {product.title}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui left labeled button fluid">
          <a className="ui right pointing basic label fluid">
            {product.price} {product.currencyId}
          </a>
          <button className="ui icon button primary fluid" tabIndex="0">
            <i aria-hidden="true" className="cart plus icon"></i> Add To Cart
          </button>
        </div>
      </Card.Content>
    </Card>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object,
}

ProductListItem.defaultProps = {
  product: {},
}

export default ProductListItem
