import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
      </div>
    );
  }
}

export default Header;
