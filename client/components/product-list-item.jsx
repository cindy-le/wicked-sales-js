import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card-deck col-4">
        <div className="card">
          <img src={this.props.image} className="card-img-top image" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text text muted">${(this.props.price / 100).toFixed(2)}</p>
            <p className="card-text">{this.props.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;

// key = { this.props.productItem.productId }
