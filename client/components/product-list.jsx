import React from 'react';

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
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default ProductList;
