import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import background from '../../images/background.jpg';

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderContainer = styled.header`
  padding: 80px 20px 80px 20px;
  background-color: grey;
  display: flex;
  gap: 30px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
`;

export const HeaderNav = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;

  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  &.active {
    font-weight: 700;
    color: rgb(224, 40, 40);
    background-color: rgba(245, 238, 238, 0.5);
  }
`;
