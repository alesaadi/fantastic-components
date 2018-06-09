import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AlertStyled from './style/AlertStyled';
import Image from '../Image/Img';

class Alert extends Component {
  render() {
    const {
      src,
      title,
      alertText
    } = this.props;

    return (
      <AlertStyled>
        <Image src={src} alt={''}/>
        <label>
          {title}
        </label>
        <label>
          {alertText}
        </label>
      </AlertStyled>
    )
  }
}

Alert.propTypes = {
  iconClass: PropTypes.string,
  title: PropTypes.string,
  alertText: PropTypes.string,
  src: PropTypes.string,
  inverse: PropTypes.bool,
  style: PropTypes.object
};

export default Alert;
