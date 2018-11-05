import React from 'react';
import styled from 'styled-components';

const Hoverings = styled.div ` 
position: absolute;
opacity: 0;
  &:hover {
    opacity: 1;
    transition-duration: 0.25s;
  }
`

const Hover = ({ onHover }) => (
  <Hoverings>{onHover}</Hoverings>
)

export default Hover;