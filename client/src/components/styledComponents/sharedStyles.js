import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem'
    case 'sm':
      return '1rem'
    default:
      return '2rem'
  }
}

export const MainButton = styled.button`
  background: linear-gradient(to bottom right, aliceblue, black);
  font-size: ${props => fontSize(props.fSize)} !important;
  color: ${props => props.color ? props.color : "green" };
  
`

export const MainImg = styled(Image)`
  border: 2px solid red !important;
  width: 800px !important;
  border-radius: 10px !important;
`