import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div``;

export const MovieDescriptionContainer = styled.div`
  display: flex;
`;

export const MovieImage = styled.img`
  display: block;
`;

export const MovieInfoContainer = styled.div`
  padding: 30px;
`;
export const MovieTitle = styled.h1`
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
`;

export const MovieInfoWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: baseline;
`;

export const MovieInfoTitle = styled.h2`
  font-size: 24px;
  line-height: 1.2;
  /* justify-content: center; */
`;

export const MovieInfo = styled.div`
  font-size: 20px;
  line-height: 1.2;
`;

export const GenersList = styled.ul`
  list-style: none;
`;

export const GenersListItem = styled.li`
  font-size: 20px;
  line-height: 1.2;
`;
export const BackLink = styled(NavLink)`
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
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
export const AdditonalTitle = styled.h2`
  font-size: 24px;
  line-height: 1.2;
`;

export const AdditonalInfoList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const AdditonalInfoItem = styled.li`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;
