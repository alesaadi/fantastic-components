import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContainerStyled from './style/ContainerStyled';

class Container extends Component {

  render() {
    const {className, children, style} = this.props;

    return (
      <ContainerStyled
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ContainerStyled>
    );
  }
}

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Container;
