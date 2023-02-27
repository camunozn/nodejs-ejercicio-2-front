import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: ${(props) => props.width || "100%"};
`;

export const ItemText = styled.div`
  font-size: ${(props) => (props.title ? "14px" : "12px")};
`;

export const TableFrame = styled.div`
  width: 100%;
  background: #fefefe;
  border-radius: 17px;
  padding: 15px 20px;
  box-shadow: 1px 1px 5px 0px rgb(161, 161, 161);
`;

export const ButtonContainer = styled.div`
  height: 30px;
  padding: 1px 20px;
  width: fit-content;
  background: ${(props) => props.color};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
