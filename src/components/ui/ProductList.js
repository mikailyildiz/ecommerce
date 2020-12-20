import ProductListItem from './ProductListItem'
import ProductListItemPH from './ProductListItemPH'
import { PropTypes } from 'prop-types'
import { Grid } from 'semantic-ui-react'

const placeholderItems = Array.from(Array(6), (x, i) => i + 1)

const ProductList = (props) => {
  const { products } = props
  return (
    <>
      {products.status &&
        products.productList.map((item) => (
          <Grid.Column key={item.id}>
            <ProductListItem product={item} />
          </Grid.Column>
        ))}
      {!products.status &&
        placeholderItems.map((item) => (
          <Grid.Column key={item}>
            <ProductListItemPH />
          </Grid.Column>
        ))}
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.object,
}

ProductList.defaultProps = {
  products: {},
}

export default ProductList
