import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

const ProductsPage = () => {
  return <h1>Products</h1>
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
