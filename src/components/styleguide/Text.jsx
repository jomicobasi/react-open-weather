import styled from 'emotion/react';
import colors from './colors';
import {css} from 'emotion';

const sizes = {
  1: '1rem'
}

export const text = css`
  margin: 0;
  font-family: Gill Sans, Gill Sans Nova, Segoe UI, sans-serif;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  font-style: ${props => props.italic ? 'italic' : 'none'};
  text-align: ${props => props.right ? 'right' : props.center ? 'center' : 'left'};
  font-size: ${props => sizes[props.size] || sizes[1]};
  letter-spacing: ${props => props.spacing ? '2px' : props.title ? '10px' : 0};
  color: ${props => props.white ? palette.lightText : props.lightLevel ? palette.lightLevel : props.gray ? palette.secondaryText : palette.darkText};
  font-weight: ${props => props.bold ? 500 : props.light ? 200 : 400};
  transition: color .3s ease;
`;

export default styled.p`
  composes: ${text};
`;