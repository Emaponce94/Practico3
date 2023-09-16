import styled from 'styled-components';
const CustomButton = styled.button`
  background-color: #007bffce;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0d5badcc;
  }
`;
export default CustomButton;