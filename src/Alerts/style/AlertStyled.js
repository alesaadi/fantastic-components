/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getBgColor, getBorderColor, getColor} from "../../Button/style/Statics";

const Alert = styled.div`            
      display: flex;
      color:${(props) => props.inverse ? getBgColor(props) : getColor(props)};
      background-color:${(props) => props.inverse ? getColor(props) : getBgColor(props)};      
      cursor:pointer;
      border:  1px solid ${(props) => getBorderColor(props)};
      border-radius:4px;
      outline: none; 
      transition:all 0.3s ease;
      padding: 10px;
     `;

export default Alert;
