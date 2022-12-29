import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: background-color 200ms linear, color 200ms linear;

  &:hover {
    background-color: #4b98f9;
    color: #eee;
  }
`;
