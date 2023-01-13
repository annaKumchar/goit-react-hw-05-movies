import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
`;

export const CastItem = styled.li`
  max-width: 200px;
`;

export const CastImg = styled.img`
 display: block;
 width: 200px;
`;
export const CastName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: black;
  text-align: center;
`;
export const CastCharacter = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: black;
  text-align: center;
`;
