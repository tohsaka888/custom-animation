import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 30px 5px #e9e9e9;
  border-radius: 20px;
  width: max-content;
  height: 35px;
`;

export const Input = styled.input`
  display: flex;
  font-size: 18px;
  padding: 3px 5px;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 8px;
  width: calc(100% - 38px);
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 50%;
  height: 35px;
  aspect-ratio: 1/1;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #1890ff;
  /* box-shadow: 0px 0px 1px 2px #cecece; */
  & :active {
    opacity: 0.5;
  }
`;
