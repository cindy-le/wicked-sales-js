import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card cardStyle">
        <img src="..." className="card-img-top" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
