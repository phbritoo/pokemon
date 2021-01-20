import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const CartContainer = styled.div`
  flex: 1;
  min-width: ${props => props.minwidth};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${moveLeft} 1s;
`;

export const CartHeader = styled.div`
  width: 100%;
  /* height: auto; */

  background: ${props => props.bgcolor};
  color: #FFF;

  font-size: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cart = styled.div`
  width: 100%;
  /* height: 100%; */

  background: #FFF;

  overflow-x: hidden; 
  overflow-x: auto;
`;

export const CartItem = styled.div`
  width: 100%;
  /* height: auto; */
  padding: 14px;

  color: #000;

  border-bottom: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;


  & button {
    text-align: center;
    background: ${props => props.bgcolor};
    color: #FFF;
    border-radius:5px;
  }

  & button:first-of-type {
    margin-right: 3px;
  }
`;

export const Total = styled.div`
  width: 100%;
  /* padding: 30px; */
font-size:20px;
  color: #000;
  background: #FFF;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* text-transform: uppercase; */
`;

export const span = styled.a`
  border-radius: 30px;
  width: 200px;

  background: ${props => props.bgcolor};
  color: #FFF;

  font-size: 20px;;

  display: flex;
  align-items: center;
  justify-content: center;
`;

