import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const BtnRst = styled.button`
  padding: 0 5px;
  display: block;
  text-align: center;
  width: 120px;
  font-weight: 600;
  padding: 6px;

  background-image: linear-gradient(to right, #53868B 0%, #e0e022 51%, #53868B 100%);
  flex: 1 1 auto;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #000000;
  box-shadow: 0 0 20px #000000;
  border: none;
  &:hover {
    background-position: right center;
    
  }
  border-radius: 0 0 20px 20px;
`;