import styled from 'styled-components';

export const SearchForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const SearchLabel = styled.label`
  display: block;
  padding: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
  color: black;
  text-align: center;
`;

export const SearchInput = styled.input`
width: 300px;
padding: 15px;
border-radius: 4px;
margin-bottom: 20px;


`;

export const SearchButton = styled.button`
font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: black;
  display: block;
  text-decoration: none;
  margin: 15px 0 15px 0;
  border-radius: 4px;
  width: 150px;
  padding: 10px 32px 10px 32px;
  background-color: rgb(240, 218, 97);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);`;
