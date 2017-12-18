import React, {Component} from 'react';
import TrStyled from './TrStyled';

class Tr extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TrStyled
        {...this.props}
      >
        {
          children
        }
      </TrStyled>
    );
  }
}

export default Tr;
