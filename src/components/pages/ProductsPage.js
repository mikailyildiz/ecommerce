import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProductList from '../ui/ProductList'

const ProductsPage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList />
    </div>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

ProductsPage.propTypes = {
  products: PropTypes.array,
}

ProductsPage.defaultProps = {
  products: [],
}

export default connect(mapStateToProps)(ProductsPage)
