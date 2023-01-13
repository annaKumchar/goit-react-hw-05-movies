import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  padding: 20px;
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
  color: black;
  text-align: center;
`;

export const MovieListEl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0;
`;

export const MovieItem = styled.li`
  width: 370px;
`;
export const MoviesTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: black;
  text-align: center;
`;

export const MovieImg = styled.img`
  display: block;
  width: calc(100%);
`;

export const InfoLink = styled(NavLink)`
  text-decoration: none;
`;
