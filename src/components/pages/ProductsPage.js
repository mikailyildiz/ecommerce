import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/products'
import ProductList from '../ui/ProductList'
import { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'

const ProductsPage = (props) => {
  useEffect(() => {
    props.fetchProducts()
  }, [])

  return (
    <div style={{ marginTop: '7em' }}>
      <h1>Products</h1>
      <Grid stackable columns={4}>
        <ProductList products={props.products} />
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

const mapDispatchToProps = {
  fetchProducts,
}

ProductsPage.propTypes = {
  products: PropTypes.object,
}

ProductsPage.defaultProps = {
  products: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
