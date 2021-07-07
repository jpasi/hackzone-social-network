import styled from 'styled-components';


export const Container = styled.div`
  position: absolute;
  width: ${props=> props ? "470px" : "270px"};
  height: 66px;
  left: ${props=> props ? "30px" : "128px"};
  top: ${props=> props ? "221px" : "396px"};
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.blue};
  text-align:center;
`;
