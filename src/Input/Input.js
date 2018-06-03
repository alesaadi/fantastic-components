import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputStyled from './style/TextInputStyled';
import Label from './style/LabelStyled';
import Div from './style/DivStyled';
import Important from './style/ImportantStyled';
import Alert from './style/AlertStyled';
import Icon from '../Icon/Icon';

class Input extends Component {
  render() {
    const {
      label,
      errorText,
      style,
      important,
      icon,
      key,
      name,
      value
    } = this.props;
    return (
      <Div style={style}>
        {
          label &&
          <Label>
            {label}
            {
              important && <Important>*</Important>
            }
          </Label>
        }
        {
          icon && <Icon iconClass={icon}/>
        }
        <InputStyled
          value={value}
          key={key}
          name={name}
          {...this.props}
        />
        {errorText && <Alert>{errorText}</Alert>}
      </Div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  important: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  rtl: PropTypes.bool,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  theme: PropTypes.object,
  style: PropTypes.object,
  key: PropTypes.object,
  noMargin: PropTypes.bool,
  error: PropTypes.bool
};

export default Input;
