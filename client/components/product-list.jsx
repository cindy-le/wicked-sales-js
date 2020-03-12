import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  comopnentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ products });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.products.map((productItem, index) => {
            return <ProductListItem
              key={index}
              name={productItem.name}
              price={productItem.price}
              image={productItem.image}
              shortDescription={productItem.shortDescription} />;
          }
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
